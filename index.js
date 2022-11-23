import { data } from "/data.js";

let reviewDiv = document.getElementById("reviews");
let nextPic = 1;

// function getData() {
//   let html = " ";

//   data.forEach((el) => {
//     html += `<div class="review-container hidden" id="review-${el.id}">
//         <div class="review-img">
//         <img src="/images/image-${el.id}.jpg" alt="">
//         <div class="slide">
//         <svg class="prev" id='prev' data-rev='${el.id}' xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/></svg>
//         <svg class="next" id="next" data-rev='${el.id}' xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/></svg>
//         </div>
//         </div>
//     <h4>${el.review}</h4>
//     <div class="reviewer-info">
//     <h5>${el.name}</h5>
//     <h6>${el.position}</h6>
//     </div>
//   </div>`;
//   });

//   reviewDiv.innerHTML = html;

//   let start = document.getElementById("review-1").classList.remove("hidden");
// //   console.log(start);
// }

// getData();

let nextBtn = document.getElementsByClassName("next");

nextBtn[0].addEventListener("click", function (e) {
//    let x = e.target.dataset.rev;

  let idk = document.getElementById("review-1");
  let idk1 = document.getElementById("review-2");
  idk1.classList.toggle("anim");
  idk.classList.toggle("hidden");
  idk1.classList.toggle("hidden");


//   if(nextPic === data.length){
//     nextPic = 1;
//     document.getElementById(`review-${nextPic}`).classList.toggle("hidden");
//     document.getElementById(`review-${nextPic+1}`).classList.toggle("hidden");
//   }
//   else {
//     nextPic++;
//     document.getElementById(`review-${nextPic}`).classList.toggle("hidden");
//     document.getElementById(`review-${x}`).classList.toggle("hidden");

//   }
  
  console.log("ugh1")
   console.log(idk);
   console.log(idk1);

//   console.log(x,data.length,nextPic);
  
});


nextBtn[1].addEventListener("click", function (e) {
  //   let x = e.target.dataset.rev;

  let idk = document.getElementById("review-1");
  let idk1 = document.getElementById("review-2");

  idk.classList.toggle("anim");
  idk1.classList.toggle("anim");
  idk.classList.toggle("hidden");
  idk1.classList.toggle("hidden");

    console.log("ugh2");
  console.log(idk);
  console.log(idk1);

  //   if(nextPic === data.length){
  //     nextPic = 1;
  //     document.getElementById(`review-${nextPic}`).classList.toggle("hidden");
  //     document.getElementById(`review-${nextPic+1}`).classList.toggle("hidden");
  //   }
  //   else {
  //     nextPic++;
  //     document.getElementById(`review-${nextPic}`).classList.toggle("hidden");
  //     document.getElementById(`review-${x}`).classList.toggle("hidden");

  //   }



  //   console.log(x,data.length,nextPic);
});


