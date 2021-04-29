var suma = 0;

function dodajProdukt(typ,cena)
{
    suma += Number(cena);
    document.getElementById("prod").innerHTML += "<p>"+typ+": "+cena+"zł</p>";
    //add button to destroy object in html with id
    document.getElementById("suma").innerHTML = suma+"zł";
}