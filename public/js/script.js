
let sidebar = document.querySelector(".header_side");
let side_menu = document.querySelector(".side_menu");
let sidebarBtn = document.querySelector(".mobile_btn iconify-icon");
let list_icon = document.querySelectorAll(".list_icon ");
let mobile_btn_mobile = document.querySelector(".mobile_btn_mobile iconify-icon");
const modal = document.querySelector(".modal"),
  but = document.querySelector('.compose'),
  closes = document.querySelector('.closes');



let anchor = document.querySelectorAll(".list_link");

// console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");

  anchor.forEach(anchor => {
     anchor.classList.toggle("remove_link");

	});

  list_icon.forEach(list_icon => {
    list_icon.classList.toggle("edit_icon");

	});



});



mobile_btn_mobile.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

but.addEventListener('click', openModal);
closes.addEventListener('click', closeModal);


//open
function openModal(e){
  e.preventDefault();
  modal.style.display = "block";

}

function closeModal(){
  
  modal.style.display = "none";

}



// jQUERY 




$(document).ready(function(){
  
  var owl_one = $('.owl-one');
  owl_one.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
  });
  
  // Custom Button
  $('.customNextBtn').click(function() {
    owl_one.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl_one.trigger('prev.owl.carousel');
  });
  
  




  var owl_two = $('.owl-two');
  owl_two.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
  });
  
  
  // Custom Button
  $('.customNBtn_two1').click(function() {
    owl_two.trigger('next.owl_two.carousel');
  });

  $('.customPBtn_two2').click(function() {
    owl_two.trigger('prev.owl_two.carousel');
  });
  


});