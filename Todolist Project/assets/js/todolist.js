// 1 STEP: check off specific todos by clicking

	// BY using an IF statement 

// $("li").click(function(){

// 	// if li is gray, turn it black 
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}

// 	// else turn it gray 
// 	else {
// 		$(this).css({       // this refers to the specific li that was clicked
// 			color: "gray",
// 			textDecoration: "line-through"        
//         });
// 	}
	 
// });


	// OR MORE SIMPLE: by defining a class in css and using toggleClass()

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

// 2 STEP: Click on X to delete Todo 

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){   // give us the parent element as a jQuery element
		$(this).remove();                      // to remove the li after it fade out
	});    
	event.stopPropagation();                   // so it does not propagate to other element
});


// 3 STEP 

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input 
		var todoText = $(this).val()
		$(this).val("");
		// create a new li and add to ul 
		$("ul").append("<li><span> <i class='fa fa-check'></i> </span> " + todoText + "</li>")
	}
});
