//Check Off Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});	

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){

		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span><div class='text'> " + todoText + "</div></li>");
		trash();
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});

function trash(){
	var inputHeight = $("li").last().css("height");
	$("span").last().css("lineHeight", inputHeight);
}