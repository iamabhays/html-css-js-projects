const rect = document.querySelector(".center");


rect.addEventListener("mousemove",(dets)=>{
    var rectLocation = rect.getBoundingClientRect();  // find the location of the mouse
    var insideRect = dets.clientX - rectLocation.left  // location of mouse inside the rectangle


    if(insideRect < rectLocation.width/2)  // agar inside rect chota hai rectlocation se to wah redcolor hoga
    {
        var redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRect)  // maprange(inmin,inmax,outmin,outmax,valuetomap)

        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        })
    }

    else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRect)
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }
})


rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor: "white"
    })
})
