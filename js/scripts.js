function speedometer(){
  const rpm= gsap.timeline();
//first gear
rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 2,
  rotate: "+=240"
  
  
})
  //shift
rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 1,
  rotate: "-=180"
  
  
})
  //second gear
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 2,
  rotate: "+=180"  
})
  //shift
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 1,
  rotate: "-=140"
  
  
})
  //third gear
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 2,
  rotate: "+=60"  
})
  
   //shift
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 1,
  rotate: "-=140"
  
  
})
  //forth gear
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 2,
  rotate: "+=130"  
})
  
   //shift
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 1,
  rotate: "-=80"
  
  
})
  //5th gear
  rpm.to(".cls-17", {
 transformOrigin: '75%, 30%',
  duration: 2,
  rotate: "+=80"  
})
  const speedo= gsap.timeline();

speedo.to(".speed", {
 transformOrigin: '75%, 25%',
  duration: 4,
  rotate: 50, 
  
  
})
  
  speedo.to(".speed", {
 transformOrigin: '75%, 25%',
  duration: 4,
  rotate: "+=50", 
  
  
})
  
  speedo.to(".speed", {
 transformOrigin: '75%, 25%',
  duration: 4,
  rotate: "+=50", 
  
  
})
 
  speedo.to(".speed", {
 transformOrigin: '75%, 25%',
  duration: 4,
  rotate: "+=80", 
  
  
})
}

function car(){
  let shell = gsap.timeline();
//first gear
shell.to("#civic", {
  
  duration: 2,
  x: "+=20",
  
  
})
  //shift
  shell.to("#civic", {
  
  duration: 1,
  x: "-=20",
  
  
})
  //2nd gear
  shell.to("#civic", {
  
  duration: 2,
  x: "+=20",
  
  
})
  //shift
  shell.to("#civic", {
  
  duration: 1,
  x: "-=20",
  
  
})
    //3rd gear
  shell.to("#civic", {
  
  duration: 2,
  x: "+=20",
  
  
})
  //shift
  shell.to("#civic", {
  
  duration: 1,
  x: "-=20",
  
  
})
      //4rd gear
  shell.to("#civic", {
  
  duration: 2,
  x: "+=20",
  
  
})
  //shift
  shell.to("#civic", {
  
  duration: 1,
  x: "-=20",
  
  
})
      //5rd gear
  shell.to("#civic", {
  
  duration: 2,
  x: "+=20",
  
  
})
 
  shell.to("#civic", {
  
  duration: 2,
  x: "+=500",
  
  
})
  
  

const wheels = gsap.timeline();

wheels.to(".wheel", {
 transformOrigin: '50%, 50%',
  rotation:"360", 
  ease:Linear.easeNone, 
  repeat:-1
  
  
})
  
}

var master = gsap.timeline();

master
.add(speedometer())
.add(car())





