var matn = prompt("so'z yoki gap kiriting").trim();

var harf = prompt("xoxlagan harfingizni kiriting").trim()
var isoq = 0;

for (var i = 0; i < matn.length; i++) { 
    if (matn[i].toLowerCase() == harf.toLowerCase()) {
        isoq++;
    }
}
console.log("" + harf + " harfi " + isoq + " marta ishlatilgan");