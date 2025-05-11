const rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (dets) {
  let rectangleLocation = rect.getBoundingClientRect(); //rectangle ka position de raha hai
  let insideRectVal = dets.clientX - rectangleLocation.left; //ismey mere mouse ka left sey position dikha raha hai

  if (insideRectVal < rectangleLocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
     let blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectVal
     );
     gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
    });
  }
  rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    });
  })
});
