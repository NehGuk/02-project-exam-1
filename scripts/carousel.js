const urlPosts = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts?categories=12&acf_format=standard&_fields=id,content,date,acf&per_page=8";
const carSmallContainer = document.querySelector(".carousel-small-container");
const arrowR = document.querySelector(".arrow-r");
const arrowL = document.querySelector(".arrow-l");

arrowL.innerHTML = ``;

async function getCarouselPosts() {
    const result = await fetch(urlPosts);
    const latestPosts = await result.json();
    carSmallContainer.innerHTML = ``;
    for(let i = 0; i < 4; i++) {
        carSmallContainer.innerHTML += `        
            <div class="card">
                <a href="/post.html?id=${latestPosts[i].id}"><img class="card-image-small" src="${latestPosts[i].acf.image}"></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h3>${latestPosts[i].acf.title}</h3></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h4 class="read-link">Read</h4></a>
            </div>
            `;
    }
}
getCarouselPosts();

arrowR.onclick = async function getNextPosts() {
    const result = await fetch(urlPosts);
    const latestPosts = await result.json();
    carSmallContainer.innerHTML = ``;
    for(let i = 4; i < 8; i++) {
        carSmallContainer.innerHTML += `        
            <div class="card">
                <a href="/post.html?id=${latestPosts[i].id}"><img class="card-image-small" src="${latestPosts[i].acf.image}"></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h3>${latestPosts[i].acf.title}</h3></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h4 class="read-link">Read</h4></a>
            </div>
            `;
    }
    arrowR.innerHTML = ``;
    arrowL.innerHTML = `<button><img src="/assets/icons/arrow-back.png"></button>`;
    console.log("Arrow right clicked");
}

arrowL.onclick = async function getPreviousPosts() {
    const result = await fetch(urlPosts);
    const latestPosts = await result.json();
    carSmallContainer.innerHTML = ``;
    for(let i = 0; i < 4; i++) {
        carSmallContainer.innerHTML += `        
            <div class="card">
                <a href="/post.html?id=${latestPosts[i].id}"><img class="card-image-small" src="${latestPosts[i].acf.image}"></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h3>${latestPosts[i].acf.title}</h3></a>
                <a href="/post.html?id=${latestPosts[i].id}"><h4 class="read-link">Read</h4></a>
            </div>
            `;
    }
    arrowR.innerHTML = `<button><img src="/assets/icons/arrow-forward.png"></button>`;
    arrowL.innerHTML = ``;
    
    console.log("Arrow left clicked");

}


