const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const urlPost = `https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/${id}?acf_format=standard&_fields=id,content,date,acf`;
const mainGrid = document.querySelector(".main-grid");
const pageName = document.querySelector("title");


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
      let postDate = new Date(post.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
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
          <p class="regular-text">${post.content.rendered}</p>
            <hr>
            <p><span class="author-name"><strong>${post.acf.author}</strong></span></p>
            <br>
            <p><span class="date">${postDate}</span></p>
            <br>
          <!-- TAGS CONTAINER -->
            <br>
            <div class="tag-container">
            </div>
        </div>
        `;
        pageName.innerHTML += ` ${post.acf.title}`;
    }
    createHTMLpost();

    async function fetchPostTags() {
      const resultTag = await fetch(urlPost);
      const tags = await resultTag.json();
      const tagContainer = document.querySelector(".tag-container");
      // console.log(tags.acf.topics.length);    
      // console.log("test");
      
      for(let t = 0; t < tags.acf.topics.length; t++) {
        // console.log(tags.acf.topics[t].name);
        tagContainer.innerHTML += `
          <p class="tag-label">${tags.acf.topics[t].name}</p>
        `;
      }
    }
    fetchPostTags();


    
  }
  catch(error) {
        console.log(`An error has occurred: ${error}`);
  }
}
getPost();
