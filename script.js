// Smooth Scroll for "Explore Services" Button
document.querySelector(".btn").addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});
