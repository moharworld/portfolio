const b=document.body,t=document.getElementById('theme');
t.onclick=()=>{b.classList.toggle('light');t.textContent=b.classList.contains('light')?'☀':'☾';};
document.querySelectorAll('.projects article,.cards div').forEach(e=>{
e.onmousemove=x=>{
const r=e.getBoundingClientRect();
e.style.transform=`perspective(700px) rotateX(${-(x.clientY-r.top-r.height/2)/20}deg) rotateY(${(x.clientX-r.left-r.width/2)/20}deg) translateY(-8px)`;
};
e.onmouseleave=()=>e.style.transform='';
});
let lastScroll = 0;
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 100){
        // Scrolling Down
        navbar.classList.add("hide");
    }else{
        // Scrolling Up
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;

});