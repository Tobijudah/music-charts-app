class Musixmatch {
   constructor(number, chart, country) {
      this.number = number
      this.chart = chart
      this.country = country 
   }

   async fetchData() {
   
      try {
         const response = await fetch('/.netlify/functions/musixmatch', {
            method: 'POST',
            body: JSON.stringify({ chart: this.chart.split('.')[1], country: this.country, number: this.number }),
          })
         console.log(response);

         const data =  await response.json()
         console.log(typeof data, data);
         return data
      } catch(error) {
         return error
      }
 
   }
}