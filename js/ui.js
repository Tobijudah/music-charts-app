class UI {
   constructor(){}

   displayTracks(tracklist) {
      const list = document.querySelector('.list')
      let output = ``
      let number = 1

      tracklist.forEach(track => {
         output += `
            <div class="track">
               <i class="fas fa-2x fa-record-vinyl purple"></i>
               <div class="text">
                  <a class="lead" href="${track.track.track_share_url}"> <span>#${number}. ${track.track.track_name}<i class="fas fa-external-link-alt"></i> </span> </a>
                  <p class="sub">${track.track.artist_name} · ${track.track.album_name}</p>
               </div>
            </div>
         `
         number++

      });

      list.innerHTML = output
   }

   displayArtists(artistslist) {
      const list = document.querySelector('.list')
      let output = ``
      let number = 1

      artistslist.forEach(artist => {
         output += `
            <div class="track">
               <i class="fas fa-2x fa-microphone purple"></i>
               <div class="text">
                  <a class="lead">#${number}. ${artist.artist.artist_name}</a>
                  <p class="sub">Rating: ${artist.artist.artist_rating}</p>
               </div>
            </div>
         `
         number++

      });

      list.innerHTML = output

   }

   updateHeader(number, chart, country) {
      const heading = document.querySelector('.heading')
      let chartType
      chart === 'chart.tracks' ? chartType = 'songs' : chartType = 'artists'
      let num = parseInt(number)
      isNaN(num) ? num = '' : num = num

      heading.textContent = `Top ${num} ${chartType} (${country.toUpperCase()})`
   }

   loadUI() {
      const list = document.querySelector('.list')

      list.innerHTML = `
      <div id="circles">
         <div id="circle1" class="circle"></div>
         <div id="circle2" class="circle"></div>
         <div id="circle3" class="circle"></div>
      </div>
      `
   }

   alert(message, highlightInputField) {
      const formCard = document.querySelector('.form')
      const parent = document.querySelector('.container')
      const alert = document.createElement('div')
      alert.classList = 'card alert'

      if (highlightInputField === true) {
         const input = document.querySelector('#number')
      input.classList.add('error')
      }

      alert.innerHTML = `
      <p><i class="fas fa-exclamation"></i> ${message}</p>
      `

      parent.insertBefore(alert, formCard)
   }

   clearAlert() {
      const alert = document.querySelector('.alert')
      alert.remove()
      const input = document.querySelector('#number')
      input.classList.remove('error')
   }
} 

