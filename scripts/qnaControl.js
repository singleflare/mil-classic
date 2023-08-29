function setQ(){
  var targetQ=null
  targetQ=window.gameVars.qnas[window.GameVars.QuestionLevel - 1]
  $('.qTd').html(targetQ.Question)
  $('#ansA .ansText').html(targetQ.AnsA)
  $('#ansB .ansText').html(targetQ.AnsB)
  $('#ansC .ansText').html(targetQ.AnsC)
  $('#ansD .ansText').html(targetQ.AnsD)
}

function revealQnAGraphics(){
  //QnA panel
  $('.ansPanel').css('opacity',1)
  $('.questionPanel').css('opacity',1)
  //Question text
  $('.qText').css('opacity',1)
  //Answer A
  $('.ansLetter .ansText').css('opacity',1)
  //Answer B
  $('.ansLetter .ansText').css('opacity',1)
  //Answer C
  $('.ansLetter .ansText').css('opacity',1)
  //Answer D
  $('.ansLetter .ansText').css('opacity',1)
}

function lockin(ans){
  if(ans='A'){
    window.gameVars.currentFinal='A'
    playFinalSound()
    $('.finalImg')
  }
  else if(ans='B'){
    window.gameVars.currentFinal='B'
    playFinalSound()
  }
  else if(ans='C'){
    window.gameVars.currentFinal='C'
    playFinalSound()
  }
  else if(ans='D'){
    window.gameVars.currentFinal='D'
    playFinalSound()
  }
}

function revealCorrect(){
  if(window.gameVars.currentCorrect='A'){
    if(window.gameVars.currentFinal='A'){
      playCorrectSound()
    }
    else playWrongSound()
  }
  else if(window.gameVars.currentCorrect='B'){
    if(window.gameVars.currentFinal='B'){
      playCorrectSound()
    }
    else playWrongSound()
  }
  else if(window.gameVars.currentCorrect='C'){
    if(window.gameVars.currentFinal='C'){
      playCorrectSound()
    }
    else playWrongSound()
  }
  else if(window.gameVars.currentCorrect='D'){
    if(window.gameVars.currentFinal='D'){
      playCorrectSound()
    }
    else playWrongSound()
  }
}