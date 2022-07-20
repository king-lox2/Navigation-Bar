const btn = document.querySelector('.btn');
const links = document.querySelector(".nav-details"); 

btn.addEventListener("click", () => {
  if(links.classList.contains('shownav')) {
    links.classList.remove('shownav');
  } else{
    links.classList.add('shownav');
  }
 
});
