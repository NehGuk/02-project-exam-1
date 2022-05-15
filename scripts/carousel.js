const urlPosts = "https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts?categories=12&acf_format=standard&_fields=id,content,date,acf&per_page=8";
const carContainer = document.querySelector(".carousel-container");




async function getCarouselPosts() {
    const result = await fetch(urlPosts);
    const carPosts = await result.json();

    carContainer.innerHTML = `
        <button class="arrow-left-button"><div class="grid-item arrow-left-container">
            <img src="/assets/icons/arrow-back.png">
        </div></button>
        `;

    for(let i = 0; i < 4; i++) {
        carContainer.innerHTML += `        
            <div class="grid-item page-one">
                <a href="/post.html?id=${carPosts[i].id}"><img class="card-image-small" src="${carPosts[i].acf.image}"></a>
                <a href="/post.html?id=${carPosts[i].id}"><h3>${carPosts[i].acf.title}</h3></a>
                <a href="/post.html?id=${carPosts[i].id}"><h4 class="read-link">Read</h4></a>
            </div>
            `;
    }
    
    carContainer.innerHTML += `
        <button class="arrow-right-button"><div class="grid-item arrow-right-container">
            <img src="/assets/icons/arrow-forward.png">
        </div></button>
        `;


        function makeRightArrowWork() {
            const arrowRightCont = document.querySelector(".arrow-right-container");
            const arrowRight = document.querySelector(".arrow-right-button");
            const arrowLeftCont = document.querySelector(".arrow-left-container");
            const arrowLeft = document.querySelector(".arrow-left-button");
            
            arrowLeft.style.opacity = "0";
            arrowRight.style.opacity = "1";
        
            arrowRight.onclick = function() {
                carContainer.innerHTML = ``;
        
                carContainer.innerHTML += `
                        <button class="arrow-left-button"><div class="grid-item arrow-left-container">
                            <img src="/assets/icons/arrow-back.png">
                        </div></button>
                    `;
        
                for(let i = 4; i < 8; i++) {
                    carContainer.innerHTML += `        
                        <div class="grid-item page-one">
                            <a href="/post.html?id=${carPosts[i].id}"><img class="card-image-small" src="${carPosts[i].acf.image}"></a>
                            <a href="/post.html?id=${carPosts[i].id}"><h3>${carPosts[i].acf.title}</h3></a>
                            <a href="/post.html?id=${carPosts[i].id}"><h4 class="read-link">Read</h4></a>
                        </div>
                        `;
                }   

            }
        }
        makeRightArrowWork();        
            
    }
    function notWorkingYet() {
        const arrowLeft = document.querySelector(".arrow-left-button");
        arrowLeft.onclick = function() {
            console.log("sdsds");

    }
    notWorkingYet();
    

}
getCarouselPosts();






