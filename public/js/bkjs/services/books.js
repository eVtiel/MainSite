app.factory('books', ['$http', function($http) { 
  return $http.get('json.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

