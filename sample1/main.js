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

app.directive("parentattribute",function(){
	return {
		restrict : "E",
		scope : {},
		controller: function($scope){
			$scope.abilities = [];
			this.addStrength = function(){
				$scope.abilities.push("strength");
			}
			this.addSpeed = function(){
				$scope.abilities.push("speed");
			}
			this.addFlight = function(){
				$scope.abilities.push("flight");
			}
		},
		link: function(scope, element){
			element.bind("mouseenter",function(){
				console.log(scope.abilities);
			})
		}
	}
});

app.directive("strength",function(){
	return {
		require: "parentattribute",
		link: function(scope,element,attrs,parentCtrl){
			parentCtrl.addStrength();
		}
	}
});

app.directive("speed",function(){
	return {
		require: "parentattribute",
		link: function(scope,element,attrs,parentCtrl){
			parentCtrl.addSpeed();
		}
	}
});

app.directive("flight",function(){
	return {
		require: "parentattribute",
		link: function(scope,element,attrs,parentCtrl){
			parentCtrl.addFlight();
		}
	}
});