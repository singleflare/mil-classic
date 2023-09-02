$(document).ready(function(){
  $(document).on('keydown',function(e){
    if(e.keyCode==37){//left arrow: money tree
      moneyTreeSlideIn()

    }
    else if(e.keyCode==39){//right arrow: reveal questions and answers
      var qnaSequence=0
      if(qnaSequence==0){
        playLetsPlay()
      }
      else if(qnaSequence==1){
        playBed()
      }
      else if(qnaSequence<=7){
        revealQnAGraphics1by1()
      }
      
      qnaSequence++
    }
    else if(e.keyCode==49){//1: lock in A
      lockin('A')
    }
    else if(e.keyCode==50){//2: lock in B
      lockin('B')
    }
    else if(e.keyCode==51){//3: lock in C
      lockin('C')
    }
    else if(e.keyCode==52){//4: lock in D
      lockin('D')
    }
    else if(e.keyCode==76){//l: lifeline pulse (only when money tree is on)
      var lifelinePulseSequence=0
      if(window.gameVars.moneyTreeIsOn&&lifelinePulseSequence==0){
        playSound("ll1.mp3")
      }
      else if(window.gameVars.moneyTreeIsOn&&lifelinePulseSequence==1){
        playSound("ll2.mp3")
      }
      else if(window.gameVars.moneyTreeIsOn&&lifelinePulseSequence==2){
        playSound("ll3.mp3")
      }
      lifelinePulseSequence++
    }
  })
})