// Spotify constructor function to encapsulate HTTP and pagination logic
App.factory('Spotify', function($http) {
  var Spotify = function($search) {
    this.items = []
    this.busy = false
    this.next = ''
    this.search = $search
  }

  Spotify.prototype.nextPage = function() {
    if (this.busy) return
    this.busy = true
    var url
    if(!this.next) {
        url = "https://api.spotify.com/v1/search?q=" + this.search +"&type=track" 

    }else{
        url = this.next
    }
    console.log("******FIRST URL********")
    console.log(url)
    console.log("******FIRST URL********")
    $http.get(url).then(function(response) {
       /* console.log("*****======******")
        console.log(response)
        console.log(url)
        console.log("*****======******")*/
      //var items = response.data.tracks
      /*for (var i = 0; i < items.length; i++) {
          console.log()
        this.items.push(items[i].data)
      }*/
      this.items.push(response.data.tracks.items[0])
      /*console.log("hello")
      console.log(this.items)*/
      console.log("*****======******")
      console.log(this.items)
      console.log("*****======******")
      this.next = response.data.tracks.next
      this.busy = false
    }.bind(this))
  }

  return Spotify
})
