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
  else if(qnaRevealSequence==1) $('.ansPanelTop .leftAnsPanel .ansLetter,.ansPanelTop .leftAnsPanel .ansText').css('opacity',1)//Answer A
  else if(qnaRevealSequence==2) $('.ansPanelTop .rightAnsPanel .ansLetter,.ansPanelTop .rightAnsPanel .ansText').css('opacity',1)//Answer B
  else if(qnaRevealSequence==3) $('.ansPanelBot .leftAnsPanel .ansLetter,.ansPanelBot .leftAnsPanel .ansText').css('opacity',1)//Answer C
  else if(qnaRevealSequence==4) $('.ansPanelBot .rightAnsPanel .ansLetter,.ansPanelBot .rightAnsPanel .ansText').css('opacity',1)//Answer D
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
  if(ans=='A'){
    $('.ansPanelTop .leftAnsPanel .finalImg').css('opacity',1)
    $('.ansPanelTop .leftAnsPanel .ansLetter,.ansPanelTop .leftAnsPanel .ansText').css('color','black')
  }
  playFinalSound()
}

function revealCorrect(){
  if(window.gameVars.currentFinal==window.gameVars.currentCorrect){
    playCorrectSound() 
  }
  else playWrongSound()
  $('.correctImg').css('opacity',1)
}