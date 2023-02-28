const allsections=document.querySelectorAll(".section");
const navs=document.querySelectorAll('.nav-link');

const revealsection=function(entries,observer){
const [entry]=entries;
if(!entry.isIntersecting) return;
entry.target.classList.remove("section-hidden");
observer.unobserve(entry.target);
 console.log(entry);
}
const sectionobserver=new IntersectionObserver(revealsection,{
root:null,
threshold:0.30,
});
allsections.forEach(function(section){
  sectionobserver.observe(section);
  section.classList.add("section-hidden");
})
navs.forEach(function(nav){
  nav.addEventListener("click",function(e){
  const target=document.querySelector(e.target.getElementsByTagName("href"));
  console.log(target);
  })})

