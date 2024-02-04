//generate a random colour

const ranmdomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(i=0; i<6; i++){
      color += hex[Math.floor(Math.random()*16)];
  
    }
    return color;
  };
  let intervalId;
  const startchangecolor = function(){
    if(!intervalId){
     intervalId = setInterval(changebgColor,1000);
    }
    function changebgColor(){
      document.body.style.backgroundColor = ranmdomColor();
  }
  };
  const stopchangecolor = function(){
    clearInterval(intervalId);
    intervalId = null;
  
    
  };
  
  document.querySelector('#start').addEventListener('click',startchangecolor);
  document.querySelector('#stop').addEventListener('click',stopchangecolor);
  
  