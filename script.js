const changeThemeBtn = document.querySelector("#change-theme")


changeThemeBtn.addEventListener("change", function(){

  
  document.body.classList.toggle("light")
  document.section.classList.toggle("light")
});