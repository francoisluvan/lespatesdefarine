function init(){
  $("a").attr({onclick:"blblbl(this)"})
  var choix_highlight =$.cookie("highlight")
  $('#'+choix_highlight).children().css({"color":"yellow"})

}
function blblbl(choix){
//  event.preventDefault()
  var id = $(choix).parent().attr("id")
  $.cookie("highlight",id)
}
