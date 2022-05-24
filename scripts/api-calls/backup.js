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



//////////////

async function createAllTags() {
    const urlTags = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/tags/";
    const tagContainer = document.querySelector(".tag-container")

    const resultTag = await fetch(urlTags);
    const tag = await resultTag.json();

    // console.log(tag[0].name);

    for(let t = 0; t < tag.length; t++) {
        console.log(tag[t].name);

        tagContainer.innerHTML += `
            <p class="tag-label">${tag[t].name}</p>
        `;
    }
}
createAllTags();



///// THIS ALMOST WORKED

async function createTags() {
    const idPost = posts[i].id;
    console.log(idPost);
    const urlPost = `https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/${idPost}?acf_format=standard&_fields=id,acf`;
    const tagsContainer = document.querySelector(".tags");

    
        
            const res = await fetch(urlPost);
            const tag = await res.json();

            console.log(tag.acf.topics[0].name);

            
            for(let t = 0; t < tag.acf.topics.length; t++) {
                tagsContainer.innerHTML += `
                    <a class="tag-label" href="#">${tag.acf.topics[t].name}</a>            
                `;
            }
        
        
    }


}
createTags();



/////// 

<div>
    <a class="tag-label" href="#">${post.acf.topics[0].name}</a>
    <a class="tag-label" href="#">${post.acf.topics[1].name}</a>
    <a class="tag-label" href="#">${post.acf.topics[2].name}</a>
</div>


//////////

// TESTING THE MODAL: GET THIS BACK TO THE PAGE LATER:

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const urlPost = `https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/${id}?acf_format=standard&_fields=id,title,content,date,acf`;
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
          <h2>${post.title.rendered}</h2>
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
            <br>
            <br>
            <a href="/blog.html"><p class="small-text"><span class="back-to-blog">&#x2190 Back to blog</span></p></a>
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
