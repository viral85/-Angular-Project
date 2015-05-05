

	
	
	app.controller('RegistrationController', ['$scope','apiService','$location','$http', function ($scope,apiService,$location,$http) {	
		
		$scope.signup = function(){
				<!-- Request Data JSON -->
				
			var data = 	{
							"username": $scope.username, 
							"password": $scope.password, 
							"email": $scope.email 
						};
			
			$http.post('http://localhost:3000/api/v1.0/users', data, {"headers" : { 'apikey': 'pDblTMZaFam59d@F9c#V1G9UEL17)Odz' }}).
				  success(function(data) {
					// this callback will be called asynchronously
					if(data.message == "User added to repositary!")
					{
						window.location = "index.html";		
					}else{
						$scope.isExist = 1;
					}
					
					// when the response is available
				  }).
				  error(function(error) {
					// called asynchronously if an error occurs
						alert(JSON.stringify(error));
					// or server returns response with an error status.
			});					
						
		};																   
														
	}]);