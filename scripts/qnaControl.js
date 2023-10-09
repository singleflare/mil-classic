function setQ(){
  var targetQ=null
  targetQ=window.gameVars.qnas[window.GameVars.QuestionLevel - 1]
  $('.qText').html(targetQ.Question)
  $('#ansA .ansText').html(targetQ.AnsA)
  $('#ansB .ansText').html(targetQ.AnsB)
  $('#ansC .ansText').html(targetQ.AnsC)
  $('#ansD .ansText').html(targetQ.AnsD)
}
let qnaRevealSequence=0
function revealQnAGraphics1by1(){
  if(qnaRevealSequence==0){//QnA panel
    $('.ansPanelTop,.ansPanelBot').css('opacity',1)
    $('.questionPanel').css('opacity',1)
    $('.qText').css('opacity',1)
  }
  else if(qnaRevealSequence==1) $('#ansA .ansLetter,#ansA .ansText')
  else if(qnaRevealSequence==2) $('#ansB .ansLetter,#ansB .ansText')
  else if(qnaRevealSequence==3) $('#ansC .ansLetter,#ansC .ansText')
  else if(qnaRevealSequence==4) $('#ansD .ansLetter,#ansD .ansText')
  else {
    qnaRevealSequence=0
    hideQnaGraphics()
  }
  console.log('qnareveal:'+qnaRevealSequence)
  qnaRevealSequence++
}

function hideQnaGraphics(){
  $('.ansPanelTop,.ansPanelBot, .questionPanel, .qText, .ansText, .ansLetter').css('opacity',0)
}
function unhideQnaGraphics(){
  $('.ansPanelTop,.ansPanelBot, .questionPanel, .qText, .ansText, .ansLetter').css('opacity',1)
}

function lockin(ans){
  window.gameVars.currentFinal=ans
  $('.ansPanelTop .leftAnsPanel .finalImg').css('opacity',1)
  $('.ansPanelTop .leftAnsPanel .ansLetter,.ansPanelTop .leftAnsPanel .ansText').css('color','black')
  playFinalSound()
}

function revealCorrect(){
  if(window.gameVars.currentFinal==window.gameVars.currentCorrect){
    playCorrectSound() 
  }
  else playWrongSound()
  $('.correctImg').css('opacity',1)
}
function showCurrentMoney(){
  $('.currentMoneyPanel').css('opacity',1)
}