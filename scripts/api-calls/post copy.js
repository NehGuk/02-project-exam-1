const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const urlPost = `https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/${id}?acf_format=standard&_fields=id,acf`;
const mainGrid = document.querySelector(".main-grid");




// GETTING THE POST CONTENT
async function getPost() {
    try {
        const result = await fetch(urlPost);
        const post = await result.json();
        /* console.log(post.acf.title);
        console.log(post.acf.content);
        console.log(post.acf.author);
        console.log(post.acf.date);
        console.log(post.acf.topics[0].name);
        console.log(post.acf.topics[1].name);
        console.log(post.acf.topics[2].name); */

        mainGrid.innerHTML = "";
        
        function createHTMLpost() {
            mainGrid.innerHTML = `
            <!-- HEADER -->
            <header>
              <div class="image">
                <img class="image-post" src="${post.acf.image}">
              </div>
            </header>
          
            <!-- CONTENT -->
            <div class="content">
              <h2>${post.acf.title}</h2>
              <p class="regular-text">${post.acf.content}</p>
                <hr>
                <p class="large-text"><strong>${post.acf.author}</strong></p>
                <br>
                <p class="small-text">${post.acf.date}</p>
                <br>
                <div>
                  <p class="tag-label">Tag 1</p> <p class="tag-label">Tag 2</p> <p class="tag-label">Tag 3</p>
                </div>
            </div>    
            `;
        }
        createHTMLpost();


    }
        catch(error) {
        console.log(`An error has occurred: ${error}`);
    }
}
getPost();


