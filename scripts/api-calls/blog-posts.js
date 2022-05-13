const urlPosts = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/?acf_format=standard&_fields=id,acf&per_page=99";
const allPosts = document.querySelector(".all-posts");
const postContainer = document.querySelector(".post-container");
const loadMoreButton = document.querySelector("button.load-more-button");


// FETCHING THE DATA

async function getPosts() {
    try {
        const res = await fetch(urlPosts);
        const posts = await res.json();
        /* console.log("Helooo");
        console.log(posts[0].id);
        console.log(posts[0].acf.title);
        console.log(posts[0].acf.content);
        console.log(posts[0].acf.author);
        console.log(posts[0].acf.date);
        console.log(posts[0].acf.topics[0].name); */
    
        allPosts.innerHTML = "";

        for (let i = 0; i < 4; i++) {
            
            function createHTML() {
                allPosts.innerHTML += `
                    <div class="post-container">
                    <div class="image">
                    <a href="/post.html"><img class="image-blog" src="${posts[i].acf.image}"></a>
                    </div>
                    <div class="headline">
                    <a href="/post.html"><h2>${posts[i].acf.title}</h2></a>
                    </div>
                    <div class="summary">
                    <p class="regular-text">${posts[i].acf.date} | ${posts[i].acf.content.slice(0, 250)}.</p>
                    </div>
                    <div class="tags">

                    
                    <a class="tag-label" href="#">${posts[i].acf.topics[0].name}</a>
                    <a class="tag-label" href="#">${posts[i].acf.topics[1].name}</a>
                    <a class="tag-label" href="#">${posts[i].acf.topics[2].name}</a>
                    </div>
                    </div>
                `; 
            }
            createHTML();
        }

    }
    catch(error) {
        console.log(`An error has occurred: ${error}`);
    }
}
getPosts();

// LOAD MORE BUTTON

loadMoreButton.style.display = "inline-block";

loadMoreButton.onclick = function() {

    async function getAllPosts() {
        try {
            const res = await fetch(urlPosts);
            const posts = await res.json();
            /* console.log("Helooo");
            console.log(posts[0].id);
            console.log(posts[0].acf.title);
            console.log(posts[0].acf.content);
            console.log(posts[0].acf.author);
            console.log(posts[0].acf.date);
            console.log(posts[0].acf.topics[0].name); */
        
            allPosts.innerHTML = "";
    
            for (let i = 0; i < posts.length; i++) {
                
                function createHTML() {
                    allPosts.innerHTML += `
                        <div class="post-container">
                        <div class="image">
                        <a href="/post.html"><img class="image-blog" src="${posts[i].acf.image}"></a>
                        </div>
                        <div class="headline">
                        <a href="/post.html"><h2>${posts[i].acf.title}</h2></a>
                        </div>
                        <div class="summary">
                        <p class="regular-text">${posts[i].acf.date} | ${posts[i].acf.content.slice(0, 250)}.</p>
                        </div>
                        <div class="tags">
    
                        
                        <a class="tag-label" href="#">${posts[i].acf.topics[0].name}</a>
                        <a class="tag-label" href="#">${posts[i].acf.topics[1].name}</a>
                        <a class="tag-label" href="#">${posts[i].acf.topics[2].name}</a>
                        </div>
                        </div>
                    `; 
                }
                createHTML();
            }
            loadMoreButton.style.display = "none";
    
        }
        catch(error) {
            console.log(`An error has occurred: ${error}`);
        }
    }
    getAllPosts();     
}



