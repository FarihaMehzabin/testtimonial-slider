import { data } from "/data.js";

let reviewDiv = document.getElementById("reviews");

function getData() {
  let html = " ";

  data.forEach((el) => {
    html += `<div class="review-container hidden" id="review-${el.id}">
        <div class="review-img">
        <img src="/images/image-${el.id}.jpg" alt="">
        </div>
    <h4>${el.review}</h4>
    <div class="reviewer-info">
    <h5>${el.name}</h5>
    <h6>${el.position}</h6>
    </div>
  </div>`;
  });

  reviewDiv.innerHTML = html;

  let start = document.getElementById("review-1").classList.remove("hidden");
  console.log(start);
}

getData();
