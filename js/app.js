const button = document.querySelector('#btn')

button.addEventListener('click', e => {
   e.preventDefault()

   const number = document.querySelector('#number').value
   const chart = document.querySelector('#chart').value
   const country = document.querySelector('#country').value
   
   let musixmatch = new Musixmatch(number, chart, country);
   let ui = new UI()
   
   console.log(number, chart, country)

   const alert = document.querySelector('.alert')
   if (alert !== null){
      ui.clearAlert()
   }

   if (number <= 0 && number !== '') {
      ui.alert("Hi, I don't think charts work like that. Please enter a positive number")
      return
   }

   if (number.indexOf(".") !== -1) {
      ui.alert("Hi, it's kinda hard to work with decimals in charts. Please try a whole number")
      return
   }

   if (number > 100) {
      ui.alert("Hi, unfortunately results are capped at 100 for now. Please try a lower number")
      return
   }

   if (number.match(/\s/g) || number.match(/\./g)){
      ui.alert('Username Cannot Have Spaces or Full Stops')
      return
  }
   
   ui.loadUI()

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

