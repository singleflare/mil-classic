function playSound(file){
  window.gameVars.sound=new Audio("sounds/"+file)
  window.gameVars.sound.play()
}
function playLetsPlay(){
  playSound(gameVars.letsplaySounds[0])
}
function playBed(){
  playSound(gameVars.bedSounds[0])
}
function playFinalSound(){
  playSound(gameVars.finalSounds[6])
}
function playCorrectSound(){
  playSound(gameVars.correctSounds[0])
}
function playWrongSound(){
  playSound(gameVars.wrongSounds[0])
}
function stopAllSound(){
  $('audio').each(function() {this.pause()})
}