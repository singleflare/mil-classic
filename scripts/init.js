function init(){

}

function qna(){
  this.Question=null
  this.AnsA=null
  this.AnsB=null
  this.AnsC=null
  this.AnsD=null
  this.CorrectAns=null
}

function getQnaForGame(){
  $.ajax({
    type:"get",
    url:"questions/qna.xml",
    dataType:"xml",
    async:false,
    success:function(xml){
      $(xml).find('question').each(function(){
        var qanda=new qna()
        qanda.Question=$(this).find('q')[0].textContent
        qanda.AnsA=$(this).find('a')[0].textContent
        qanda.AnsB=$(this).find('b')[0].textContent
        qanda.AnsC=$(this).find('c')[0].textContent
        qanda.AnsD=$(this).find('d')[0].textContent

        if($(this).find('a')[0].attributes[0].value=="yes"){qanda.CorrectAns="a"}
        else if($(this).find('b')[0].attributes[0].value=="yes"){qanda.CorrectAns="b"}
        else if($(this).find('c')[0].attributes[0].value=="yes"){qanda.CorrectAns="c"}
        else if($(this).find('d')[0].attributes[0].value=="yes"){qanda.CorrectAns="d"}

        window.GameVariables.QuestionsAndAnswers.push(qanda)
      })
    }
  })
}