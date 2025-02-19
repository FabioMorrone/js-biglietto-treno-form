// numero di chilometri che vuole percorrere l'utente
const kmPercorribili = Number(("inserire il numero di km da percorrere , 10,15,20 ecc.."));
console.log(kmPercorribili);



// età dell'utente
const etaDelPasseggero = Number(("inserire l'età del passeggero")); 
console.log(etaDelPasseggero);


// prezzo totale del viaggio

let prezzoBiglietto = kmPercorribili * 0.21;
console.log(prezzoBiglietto);


        
 if (etaDelPasseggero < 18) {
    const sconto = (prezzoBiglietto * 20) / 100;
    console.log(sconto);
    
    const prezzoTotale = (prezzoBiglietto - sconto)
    console.log(prezzoTotale);
    console.log(prezzoTotale.toFixed(2));
    alert("il prezzo da pagare è:" + prezzoTotale.toFixed(2));

 } else if (etaDelPasseggero > 65) {
    const sconto = (prezzoBiglietto * 40) / 100;
    console.log(sconto);
    
    const prezzoTotale = (prezzoBiglietto - sconto)
    console.log(prezzoTotale);
    console.log(prezzoTotale.toFixed(2));
    alert('il prezzo da pagare è:' + prezzoTotale.toFixed(2)); 
 }