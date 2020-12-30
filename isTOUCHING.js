function isTouching2(one,two) 
  {
    if (one.x - two.x < one.width /2 + two.width /2 && two.x - one.x < one.width /2 + two.width /2 && one.y - two.y < one.height /2 + two.height /2 && two.y - one.y < one.height /2 + two.height /2 )  {
      return true


      
  
    }
   else {
    return false
    
  
   }
   
  }