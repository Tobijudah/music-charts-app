const button = document.querySelector('#btn')

button.addEventListener('click', e => {
   e.preventDefault()

   const number = document.querySelector('#number').value
   const chart = document.querySelector('#chart').value
   const country = document.querySelector('#country').value
   
   let musixmatch = new Musixmatch(number, chart, country);
   let ui = new UI()
   
   console.log(number, chart, country)

   ui.clearHeader()

   const alert = document.querySelector('.alert')
   if (alert !== null){
      ui.clearAlert()
   }

   if (number <= 0 && number !== '') {
      ui.alert("Hi, seems you entered a negative number. Please enter a positive number", true)
      return
   }

   if (number.indexOf(".") !== -1) {
      ui.alert("Hi, it's kinda hard to work with decimals in charts. Please try a whole number", true)
      return
   }

   if (number > 100) {
      ui.alert("Hi, unfortunately results are capped at 100 for now. Please try a lower number", true)
      return
   }

   if (number.match(/\s/g) || number.match(/\./g)){
      ui.alert('Username Cannot Have Spaces or Full Stops', true)
      return
  }
   
   ui.loadUI()

   musixmatch.fetchData()
   .then(data => {
      ui.updateHeader(number, chart, country)
      if (chart === 'chart.tracks') {
         ui.displayTracks(data.message.body.track_list)
      }
      if (chart === 'chart.artists') {
         ui.displayArtists(data.message.body.artist_list)
      }
   })
   .catch(error => {
      ui.alert('An error occured please try again', false)
      const list = document.querySelector('.list')
      list.innerHTML = ''
      return error
   })
   
})

const modeBtn = document.querySelector('#mode-btn')

modeBtn.addEventListener('click', e => {
   ui = new UI()
   ui.toggleUIMode()
})