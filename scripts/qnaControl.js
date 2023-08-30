function setQ(){
  var targetQ=null
  targetQ=window.gameVars.qnas[window.GameVars.QuestionLevel - 1]
  $('.qText').html(targetQ.Question)
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
  $('#ansA .ansLetter .ansText').css('opacity',1)
  //Answer B
  $('#ansB .ansLetter .ansText').css('opacity',1)
  //Answer C
  $('#ansC .ansLetter .ansText').css('opacity',1)
  //Answer D
  $('#ansD .ansLetter .ansText').css('opacity',1)
}

function lockin(ans){
  if(ans='A'){
    window.gameVars.currentFinal='A'
    $('#ansA .finalImg').css('opacity',1)
  }
  else if(ans='B'){
    window.gameVars.currentFinal='B'
    $('#ansB .finalImg').css('opacity',1)
  }
  else if(ans='C'){
    window.gameVars.currentFinal='C'
    $('#ansC .finalImg').css('opacity',1)
  }
  else if(ans='D'){
    window.gameVars.currentFinal='D'
    $('#ansD .finalImg').css('opacity',1)
  }
  playFinalSound()
}

function revealCorrect(){
  if(window.gameVars.currentFinal==window.gameVars.currentCorrect){
    playCorrectSound()
  }
  else playWrongSound()
  $('.finalImg')
}