const button = document.querySelector('#btn')

button.addEventListener('click', e => {
   e.preventDefault()

   const number = document.querySelector('#number').value
   const chart = document.querySelector('#chart').value
   const country = document.querySelector('#country').value
   
   let musixmatch = new Musixmatch(number, chart, country);
   let ui = new UI()

   console.log(number, chart, country)

   musixmatch.fetchData()
   .then(data => {
      if (chart === 'chart.tracks') {
         ui.displayTracks(data.message.body.track_list)
      }
      if (chart === 'chart.artists') {
         ui.displayArtists(data.message.body.artist_list)
      }
   })
   
   ui.updateHeader(number, chart, country)
})

