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
  //Answer A
  //Answer B
  //Answer C
  //Answer D
}

function lockin(ans){
  $('#ans'+ans+'.finalImg')
}

function revealCorrect(){
  if(window.gameVars.currentCorrect='A'){
    if(window.gameVars.currentFinal='A'){
      playCorrectSound()
    }
    else{playWrongSound()}
  }
}