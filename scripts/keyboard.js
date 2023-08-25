$(document).ready(function(){
  $(document).on('keydown',function(e){
    if(e.keyCode==39){//right arrow: reveal questions and answers
      revealQnApanel()
    }
    else if(e.keyCode==49){//1: lock in A
      if(window.gameVars.qinProgress==true&&window.gameVars.currentFinal==""){
        lockin('A')
        window.gameVars.currentFinal='A'
        playFinalSound()
      }
    }
    else if(e.keyCode==50){//2: lock in B
      if(window.gameVars.qinProgress==true&&window.gameVars.currentFinal==""){
        lockin('B')
        window.gameVars.currentFinal='A'
        playFinalSound()
      }
    }
    else if(e.keyCode==51){//3: lock in C
      
    }
    else if(e.keyCode==52){//4: lock in D
      
    }
  })
})