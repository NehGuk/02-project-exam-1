// MODAL

const modal = document.querySelector(".modal");
const imagePost = document.querySelector(".image-post");
const imageBig = document.querySelector(".image-post");
const caption = document.querySelector(".caption");

imagePost.addEventListener("click", () => {
  console.log("Image clicked");
  modal.classList.add("open");
});

modal.addEventListener("click", (e) => {
  //console.log(e);
  if(e.target.classList.contains("modal")) {
    modal.classList.remove("open");
  };
});

/// MODAL END


