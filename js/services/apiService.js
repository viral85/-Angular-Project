		
		app.factory("apiService", ["$http", function($http) {
	
					var get = function(url) {
						return $http.get(url);						
					};
					
					var post = function(url,data) {
						return $http.post(url,data);				
					};
					
					var remove = function(url,data) {
						return $http.delete(url,data);						
					};
	
					return {
						get: get,
						post: post,
						remove: remove,
					};
		}]);