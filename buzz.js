function buzz() {
 for(i=1; i < 101; i++) {
  if(i % 15 === 0) 
   console.log("it is divisable by both 3 and 5");

  else if(i % 5 === 0) 
   console.log("its divisable by 5");
  
  else if(i % 3 === 0) 
   console.log("it is divisable by 3");
  
  else 
   console.log(i);
  
 }
}

buzz();