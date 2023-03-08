function Valt(a)
{

    var szam = document.getElementById("szam");

    if (a == 0)
    {
        var szin = document.getElementById("szin").value;
        document.getElementById("kep").src = "../images/" + szin;
    }
    else if (a == 1)
    {
        var felirat = document.getElementById("felirat");
        var szoveg = document.getElementById("szoveg").value;
        felirat.innerHTML = szoveg;
    }
    else
    {
        var sorszam = document.getElementById("sorszam");
        var szam = document.getElementById("szam").value;
        sorszam.innerHTML = szam;
    }
}