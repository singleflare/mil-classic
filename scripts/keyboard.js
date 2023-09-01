$(document).ready(function(){
  $(document).on('keydown',function(e){
    if(e.keyCode==37){//left arrow: money tree
      moneyTreeSlideIn()

    }
    else if(e.keyCode==39){//right arrow: reveal questions and answers
      revealQnAGraphics1by1()
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

  })
})