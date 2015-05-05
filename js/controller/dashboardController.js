

	
	
	app.controller('dashboardController', ['$scope','apiService','$location','$http', function ($scope,apiService,$location,$http) {	
			
            $scope.init = function() {
			
				 var user = $scope.getCookie('token');	
		
				 if (user != "") {
					$scope.currentUser = user;
					
					$scope.getUser();
				 }else{
					  window.location = 'index.html';
				 } 
			};
			
			$scope.getUser = function(){
				<!-- Request Data JSON -->				
				
				$http.get('http://localhost:3000/api/v1.0/user/'+$scope.currentUser,{"headers" : { 'apikey': 'pDblTMZaFam59d@F9c#V1G9UEL17)Odz' }}).
					success(function(data) {
						// this callback will be called asynchronously
						$scope.username = data.username;
						$scope.email 	= data.email;
						// when the response is available
					}).
					error(function(error) {
						// called asynchronously if an error occurs
							alert(JSON.stringify(error));
						// or server returns response with an error status.
					});					
							
			};
			
			$scope.editUser = function(){
				<!-- Request Data JSON -->				
				
				var data = 	{
							"username": $scope.username, 
							"email": $scope.email 
						};
						
				$http.put('http://localhost:3000/api/v1.0/user/'+$scope.currentUser,data,{"headers" : { 'apikey': 'pDblTMZaFam59d@F9c#V1G9UEL17)Odz' }}).
					success(function(data) {
						// this callback will be called asynchronously
						$scope.isEdit = 1;
						// when the response is available
					}).
					error(function(error) {
						// called asynchronously if an error occurs
							alert(JSON.stringify(error));
						// or server returns response with an error status.
					});					
							
			};
			  
			  
			$scope.getCookie = function(cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i=0; i<ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1);
					if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
				}
				return "";
			}
			
			$scope.logout = function(){
				
					$http.get('http://localhost:3000/api/v1.0/logout',{"headers" : { 'apikey': 'pDblTMZaFam59d@F9c#V1G9UEL17)Odz' }}).
						success(function(data) {
							// this callback will be called asynchronously
							if(data.error == 0)
							{
								var expires = "expires=";
								document.cookie = "token=; " + expires;
								$scope.init();						// when the response is available
							}
						}).
						error(function(error) {
							// called asynchronously if an error occurs
								alert(JSON.stringify(error));
							// or server returns response with an error status.
						});		
						
			}
			$scope.init();
			
														
	}]);