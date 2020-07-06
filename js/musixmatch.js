class Musixmatch {
   constructor(number, chart, country) {
      this.apiKey = 'c93b979443af33c9e9f88812446b2eab'
      this.number = number
      this.chart = chart
      this.country = country 
   }

   async fetchData() {
      
      const url = `https://api.musixmatch.com/ws/1.1/${this.chart}.get?apikey=${this.apiKey}&chart_name=top&page=1&page_size=${this.number}&country=${this.country}`

      console.log(url);
   
      const response = await fetch(url)

      const data =  await response.json()
      console.log(typeof data, data);
      return data


      
   }
}


// http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=c93b979443af33c9e9f88812446b2eab&chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1