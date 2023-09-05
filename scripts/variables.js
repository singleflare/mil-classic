(function(gameVars){
  gameVars.contestantName="Contestant name"
  gameVars.contestantLocation="Contestant location"

  gameVars.currentFinal=""
  gameVars.currentCorrect=""

  gameVars.AnsADeleted=false
  gameVars.AnsBDeleted=false
  gameVars.AnsCDeleted=false
  gameVars.AnsDDeleted=false

  gameVars.moneyTreeIsOn=true
  gameVars.fiftyUsed=false
  gameVars.jumpUsed=false
  gameVars.doubleUsed=false

  gameVars.questionNumber=null
  gameVars.revealQnaKeyboardSequence=0

  gameVars.qnas=[]
  gameVars.moneys=["1,000","2,000","3,000","5,000","10,000","20,000","30,000","50,000","70,000","100,000","150,000","250,000","400,000","600,000","1,000,000"]
  gameVars.letsplaySounds=["1start.mp3","","","","","6&11start.mp3","7&12start.mp3","8&13start.mp3","9&14start.mp3","10&15start.mp3","6&11start.mp3","7&12start.mp3","8&13start.mp3","9&14start.mp3","10&15start.mp3"]
  gameVars.bedSounds=["1-5bed.mp3","1-5bed.mp3","1-5bed.mp3","1-5bed.mp3","1-5bed.mp3","6bed.mp3","7bed.mp3","8bed.mp3","9bed.mp3","10bed.mp3","11bed.mp3","12bed.mp3","13bed.mp3","14bed.mp3","15bed.mp3"]
  gameVars.finalSounds=["","","","","","6&11final.mp3","7&12final.mp3","8&13final.mp3","9&14final.mp3","10&15final.mp3","6&11final.mp3","7&12final.mp3","8&13final.mp3","9&14final.mp3","10&15final.mp3"]
  gameVars.correctSounds=["1-4win.mp3","1-4win.mp3","1-4win.mp3","1-4win.mp3","5win.mp3","6win.mp3","7win.mp3","8win.mp3","9win.mp3","10win.mp3","11win.mp3","12win.mp3","13win.mp3","14win.mp3","15win.mp3"]
  gameVars.wrongSounds=["1-5lose.mp3","1-5lose.mp3","1-5lose.mp3","1-5lose.mp3","1-5lose.mp3","6&11lose.mp3","7&12lose.mp3","8&13lose.mp3","9&14lose.mp3","10&15lose.mp3","6&11lose.mp3","7&12lose.mp3","8&13lose.mp3","9&14lose.mp3","10&15lose.mp3"]
})(window.gameVars=window.gameVars||{});