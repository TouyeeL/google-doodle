function speedometer(repeat = -1){
    const rpm= gsap.timeline();
  
  rpm.to(".cls-17", {
   transformOrigin: '75%, 30%',
    duration: 2,
    rotate: "+=180"
    
    
  })
  rpm.to(".cls-17", {
   transformOrigin: '75%, 30%',
    duration: 3,
    rotate: "-=100"
    
    
  })
    
    const speedo= gsap.timeline();
  
  speedo.to(".speed", {
   transformOrigin: '75%, 25%',
    duration: 6,
    rotate: 75, 
    
    
  })
  }
  
  function car(repeat = -1){
    const shell = gsap.timeline();
  
  shell.to("#civic", {
    
    duration: 4,
    x: "+=500"
    
    
  })
  
  const wheels = gsap.timeline(repeat = -1);
  
  wheels.to(".wheel", {
   transformOrigin: '50%, 50%',
    duration: 4,
    rotate: 1080
    
    
  })
    
  }
  
  var master = gsap.timeline(repeat = -1);
  
  master
  .add(speedometer())
  .add(car())
  
  
  
  
  
  