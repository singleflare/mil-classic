$(document).ready(function(){
  $(document).on('keydown',function(e){
    while(true){
      console.log(e.keyCode)
    }
    if(e.keyCode==39){//right arrow: reveal questions and answers
      revealQnAGraphics()
    }
    else if(e.keyCode==49){//1: lock in A
      lockin('A')
      window.gameVars.currentFinal='A'
      playFinalSound()
    }
    else if(e.keyCode==50){//2: lock in B
      lockin('B')
      window.gameVars.currentFinal='B'
      playFinalSound()
    }
    else if(e.keyCode==51){//3: lock in C
      lockin('C')
      window.gameVars.currentFinal='C'
      playFinalSound()
    }
    else if(e.keyCode==52){//4: lock in D
      lockin('D')
      window.gameVars.currentFinal='D'
      playFinalSound()
    }

  })
})