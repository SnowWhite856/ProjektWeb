var suma = 0;

function dodajProdukt(typ,cena)
{
    suma += Number(cena);
    document.getElementById("prod").innerHTML += "<p>"+typ+": "+cena+"zł</p>";
    document.getElementById("suma").innerHTML = suma+"zł";
}