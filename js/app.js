var app = angular.module('tictactoeApp', []);

app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/tictactoe.html',
            controller: 'GameController'
        }).
        otherwise({
            redirectTo: '/'
    });
});

app.constant('grid_size', 3);

app.factory('game', function(){
	return new Game();
});

app.directive('shortcut', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: true,
		link: function postLink(scope, iElement, iAttrs){
			jQuery(document).on('keypress', function(e){
				scope.$apply(scope.keyPressed(e));
			});
		}
	};
});