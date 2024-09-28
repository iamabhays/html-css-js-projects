 const rect = document.querySelector("#rect");

 window.addEventListener("mousemove",(dets)=>{
  let rectlocation = rect.getBoundingClientRect();
  var xvalue = gsap.utils.mapRange(0,window.innerWidth,100+rectlocation.width/2,window.innerWidth -(100+rectlocation.width/2),dets.clientX)
  gsap.to(rect,{
    left: xvalue+"px",
    ease: Power3
  })
 })


 // window.innerWidth means the size of the window in width
 // 100+rectlocation.width/2 means the rectangle kone se addha + 100 pcihe chala jaye
 // window.innnerwidth x ke right me badhti hai and left me ghat ti hai to
 // right me se 100+ reclocation.width/2 ko ghata denge to card right end se 100+ rectangle ka aadha width phle hai window ki size se
 // dets.clientX gaves the value of x axis movement