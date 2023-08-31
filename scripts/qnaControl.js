function setQ(){
  var targetQ=null
  targetQ=window.gameVars.qnas[window.GameVars.QuestionLevel - 1]
  $('.qText').html(targetQ.Question)
  $('#ansA .ansText').html(targetQ.AnsA)
  $('#ansB .ansText').html(targetQ.AnsB)
  $('#ansC .ansText').html(targetQ.AnsC)
  $('#ansD .ansText').html(targetQ.AnsD)
}

function revealQnAGraphics1by1(){
  var qnaRevealSequence=0
  if(qnaRevealSequence==0){//QnA panel
    $('.ansPanel').css('opacity',1)
    $('.questionPanel').css('opacity',1)
  }
  else if(qnaRevealSequence==1) $('.qText').css('opacity',1)//Answer A
  else if(qnaRevealSequence==2) $('#ansA .ansLetter .ansText').css('opacity',1)//Answer A
  else if(qnaRevealSequence==3) $('#ansB .ansLetter .ansText').css('opacity',1)//Answer B
  else if(qnaRevealSequence==4) $('#ansC .ansLetter .ansText').css('opacity',1)//Answer C
  else if(qnaRevealSequence==5) $('#ansD .ansLetter .ansText').css('opacity',1)//Answer D
  else {
    qnaRevealSequence=-1
    hideQnaGraphics()
  }
  qnaRevealSequence++
}

function hideQnaGraphics(){
  $('.ansPanel, .questionPanel, .qText, .ansText, .ansLetter').css('opacity',0)
}

function lockin(ans){
  window.gameVars.currentFinal=ans
  $('#ans'+answer+'.finalImg').css('opacity',1);
  $('#ans'+ answer+ '.ansLetter .ansText').css('color', '#000000');
  playFinalSound()
}

function revealCorrect(){
  if(window.gameVars.currentFinal==window.gameVars.currentCorrect){
    playCorrectSound()
  }
  else playWrongSound()
  $('.correctImg').css('opacity',1)
}