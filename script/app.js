   var userPost =[];
   var displayPost = document.getElementById("display-post");
   function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data =>{
    console.log(data) 
     userPost = data;

    
    var displayData = "";
         userPost.forEach(e=>{
        displayData += `
        <div class="col-lg-3 col-md-4 col-sm-6 mt-3"   >
        <div class="card h-100 " >
        
        <div class="card-body " >
        <a href="./readone.html?id=${e.id}" target ="_blank"  class= " text-decoration-none" id ="readone">
        <h2 class=" d-flex justify-content-end text-danger">${e.id}</h2>
        <h5 class="card-title mb-3">${e.title}</h5>
                  
                  <p class="card-text">${e.body}</p>
                  </a>
                  <div class="mt-3">
                  <button type="submit" class="btn btn-danger mb-3">Delete</button>
                  <button type="submit" class="btn btn-warning mb-3">Update</button>
                  </div>

                   </div>
               
              </div>
              </div>
        `
        displayPost.innerHTML = displayData;

    })
   
    }))
}
             getPosts();
   

  let readOne = document.getElementById('readone');
   
  function getPost(){
      const postId= window.location.search;
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     .then(response => response.json())
     .then(data =>{
          console.log(data)
          var post = data;
         
          var displayPost = "";
          post.forEach(e=>{
         displayPost += `
         <div class="col-lg-6 col-md-6 col-sm-6 mt-5  justify-content-center "   >
         <div class="card h-100 " >
         
         <div class="card-body " >
         
         <h2 class=" d-flex justify-content-end text-danger">${e.id}</h2>
         <h5 class="card-title mb-3">${e.title}</h5>
                   
                   <p class="card-text">${e.body}</p>
                   <div class="mt-3">

                   <button type="submit" class="btn btn-danger mb-3">Delete</button>
                   <button type="submit" class="btn btn-warning mb-3">Update</button>
                   </div>
 
                    </div>
                
               </div>
               </div>
         `
     
         readOne.innerHTML = displayPost;
 
          });
     })
    
     
    
    }
        
    getPost();