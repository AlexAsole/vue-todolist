/* Creaiamo un input con un tasto submit.
Dopo aver scritto qualcosa nell'input se (1) premo invio oppure
(2) clicco sul pulsante submit, il codice pusha il contenuto dell'input
in un array all'interno di data (vuejs).
Se ci riuscite (col tempo) visualizzare nella parte
sottostante l'input la lista degli elementi
in questo array (quello che popoliamo ad ogni submit) */
Vue.config.devtools = true;
 new Vue ({
   el:'#root',
   data:{
     inputData: '',
     dataArray:[]
   },
   methods: {
     insideArray: function() { // funzione: inserisci input nell'arrey, poi svuota input
       if(this.inputData !== ''){
         this.dataArray.push(this.inputData);
         this.inputData = '';
       }
     },
     removeElement: function(i) { // funzione: rimuovi elemento da array
       this.dataArray = this.dataArray.filter((element, index) => {
         return index !== i
       })
     }
   }
 });
