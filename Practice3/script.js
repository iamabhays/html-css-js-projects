
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector(".center").addEventListener("mousemove",
    throttleFunction((dets) => {
        // create a div every time when mouse move on the rectangle 

        let div = document.createElement("div")

        // add class to the div for styling and showing
        div.classList.add("imgdiv");

        // div ko left and top me set karna of mouse ke move karne ka x and y ke bich me
        div.style.left = dets.clientX +"px";
        div.style.top = dets.clientY +"px";

        // image banao for animation

        var img = document.createElement("img")
        img.setAttribute("src","https://imgs.search.brave.com/TZJIdMiWZYhnWCu6-NeRdtKVwoTtxuv4Z0MyDM8YIDo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U0Lzg0/Lzc5L2U0ODQ3OWQy/YzgwZmIyNWFmMjQ4/ODZhMWM3OTk4OTY3/LmpwZw")
        div.appendChild(img);
       

        gsap.to(img,{
            y:'0',
            ease: Power1,
            duration: .6
        })

        gsap.to(img,{
            y:'100%',
            delay: .6,
            ease: Power2
        })

        // add to the parent element where u want to show them on web page
        document.body.appendChild(div)

        // after sometime the div remove ho jaye jisse dekhne me acha lage
       setTimeout(()=>{
        div.remove();
       },2000)

    }, 500));