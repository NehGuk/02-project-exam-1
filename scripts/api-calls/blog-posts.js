const urlPosts = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts?categories=12&acf_format=standard&_fields=id,title,content,date,acf&per_page=99";
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

        for (let i = 0; i < 10; i++) {
            
            function createHTML() {
                let postDate = new Date(posts[i].date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
                
                allPosts.innerHTML += `
                    <div class="post-container">
                    <div class="image">
                    <a href="/post.html?id=${posts[i].id}"><img class="image-blog" src="${posts[i].acf.image}"></a>
                    </div>
                    <div class="headline">
                    <a href="/post.html?id=${posts[i].id}"><h2>${posts[i].title.rendered}</h2></a>
                    </div>
                    <div class="summary">
                    <p><span class="date">By ${posts[i].acf.author} | ${postDate}</span></p>
                    
                    <p class="regular-text">${posts[i].content.rendered.slice(0, 320)}... <a href="/post.html?id=${posts[i].id}" class="read-more"><strong>Read more &#10141;</strong></a></p>
                    </div>
                    <div class="tags">
                    <a class="tag-label">${posts[i].acf.topics[0].name}</a>
                    <a class="tag-label">${posts[i].acf.topics[1].name}</a>
                    <a class="tag-label">${posts[i].acf.topics[2].name}</a>
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
        
            allPosts.innerHTML += "";
    
            for (let i = 10; i < posts.length; i++) {
                
                function createHTML() {
                    let postDate = new Date(posts[i].date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
                    
                    allPosts.innerHTML += `
                        <div class="post-container">
                        <div class="image">
                        <a href="/post.html?id=${posts[i].id}"><img class="image-blog" src="${posts[i].acf.image}"></a>
                        </div>
                        <div class="headline">
                        <a href="/post.html?id=${posts[i].id}"><h2>${posts[i].title.rendered}</h2></a>
                        </div>
                        <div class="summary">
                        <p><span class="date">By ${posts[i].acf.author} | ${postDate}</span></p>
                        
                        <p class="regular-text">${posts[i].content.rendered.slice(0, 300)}... <a href="/post.html?id=${posts[i].id}" class="read-more"><strong>Read more &#10141;</strong></a></p>
                        </div>
                        <div class="tags">
                        <a class="tag-label">${posts[i].acf.topics[0].name}</a>
                        <a class="tag-label">${posts[i].acf.topics[1].name}</a>
                        <a class="tag-label">${posts[i].acf.topics[2].name}</a>
                        </div>
                        </div> 
                    `; 
                    loadMoreButton.style.display = "none";
                }
                createHTML();
            }
        }
        catch(error) {
            console.log(`An error has occurred: ${error}`);
        }
    }
    getAllPosts();
     
}

