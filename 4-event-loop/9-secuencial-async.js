const readline = require('readline');
const fetch = require('node-fetch');

console.log("Inicio");

// Función para obtener un usuario de una API
function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener el usuario");
      return response.json();
    });
}

// Función para obtener los posts de un usuario
function getPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener los posts");
      return response.json();
    });
}

// Función para obtener los comentarios del post
function getComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener comentarios del post");
      return response.json();
    });
}

async function fetchUserDetails(userId) {
  try {
    const user = await getUser(userId);
    console.log("Datos del usuario:", user);
    console.log("Fin");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchOrderDetails(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(user.id);

    // Obtener los comentarios de todos los posts
    const commentsPromises = posts.map(post => getComments(post.id));
    const allComments = await Promise.all(commentsPromises);

     // Usar reduce para agrupar los comentarios por post
     const commentsByPost = allComments.flat().reduce((acc, comment) => {
      if (!acc[comment.postId]) {
        acc[comment.postId] = [];
      }
      acc[comment.postId].push(comment);
      return acc;
    }, {});

    console.log("Comentarios agrupados por post:", commentsByPost);
   
    
    // console.log("Comentarios de todos los posts:", allComments);
    console.log("Fin");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Crear interfaz de readline para solicitar el ID del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el ID del usuario que desea obtener: ", (userId) => {
  // Llamar a las funciones con el ID ingresado
  fetchUserDetails(userId);
  fetchOrderDetails(userId);
  rl.close();
});