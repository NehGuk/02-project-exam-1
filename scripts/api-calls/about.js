const urlAbout = `https://gingaikidb.henrikugler.no/wp-json/wp/v2/posts/93?&acf_format=standard&_fields=id,content,date,acf&per_page=99`;
const aboutContent = document.querySelector(".content");

async function getAboutContent() {
    const result = await fetch(urlAbout);
    const aboutText = await result.json();
    
    aboutContent.innerHTML = `
        ${aboutText.content.rendered}
        <a class="cta" href="/blog.html">Blog</a>
        `;
}
getAboutContent();