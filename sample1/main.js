var app = angular.module("superhero",[]);

app.directive("superman",function() {
	return {
		restrict: "E",
		template: "<div> Here I am to save the day </div>"
	}
});

app.directive("superattribute",function() {
	return {
		restrict: "A",
		link: function() {
            alert("This is a attribute")
        }
	}
});

app.directive("superclass",function() {
	return {
		restrict: "C",
		link: function() {
            alert("This is a class")
        }
	}
});

app.directive("enter",function(){
	return function(scope,element){
		element.bind("mouseenter",function(){
			alert("This is the mouseenter event");
		})
	}
});

app.directive("leave",function(){
	return function(scope,element){
		element.bind("mouseleave",function(){
			alert("This is the mouseleave event");
		})
	}
});