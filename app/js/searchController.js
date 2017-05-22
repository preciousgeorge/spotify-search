App.controller('MusicController', function($scope, $http, Spotify) {
    $scope.$watch('search', function() {
      $scope.spotify = new Spotify($scope.search)
      
    })



    


    $scope.search = ""

   /* function fetch() {
 
        $http.get("https://api.spotify.com/v1/search?q=" + $scope.search +"&type=track")
        .then(function(response) {
          console.log(response)
          $scope.details = response.data
          $scope.next = response.data.next
        })



    }

    $scope.update = function(music) {
      $scope.search = music
    }
*/
    $scope.select = function() {
      this.setSelectionRange(0, this.value.length)
    }
  })