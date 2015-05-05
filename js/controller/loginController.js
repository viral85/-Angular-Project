

	
	
	app.controller('LoginController', ['$scope','apiService','$location','$http', function ($scope,apiService,$location,$http) {	
			
			$scope.login = function(){
				
			
				<!-- Request Data JSON -->
				var data = 	{
								"username": $scope.username, 
								"password": $scope.password, 
							};
			
				
					$http.post('http://localhost:3000/api/v1.0/login ', data, {"headers" : { 'apikey': 'pDblTMZaFam59d@F9c#V1G9UEL17)Odz' }}).
					  success(function(data) {
								
								
								if(data.error == 0)
								{
									// this callback will be called asynchronously
									var d = new Date();
									d.setTime(d.getTime() + (1*24*60*60*1000));
									var expires = "expires="+d.toUTCString();
									document.cookie = "token="+data.data._id+"; " + expires;									
									window.location = 'dashboard.html';
									
								}else{
									$scope.isError = 1;									
								}

							// when the response is available
					  }).
					  error(function(error) {						 
						// called asynchronously if an error occurs
							$scope.isError = 1;
						// or server returns response with an error status.
					  });					
						
					
					 
				
	
				};																   
														
	}]);