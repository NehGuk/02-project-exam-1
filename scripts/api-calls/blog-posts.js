// TESTING
// const all = document.querySelector(".headline");
// all.style.display = "none";

/* const allPostsContainer = document.querySelector("all-posts-container"); */
// allPostsContainer.style.display = "none";
// postContainer.innerHTML = "blalbalba";


const urlPosts = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/?acf_format=standard&_fields=id,acf&per_page=99";
const allPosts = document.querySelector(".all-posts");
const postContainer = document.querySelector(".post-container");


// allPosts.style.display = "none";


function testHere() {
    console.log("blalbalba");
}
testHere;



async function fetchPosts() {
    
    const result = await fetch(urlPosts);
    const posts = await result.json();
    console.log("helloooo");

}
fetchPosts;

