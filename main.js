// 1
let elements = document.querySelectorAll('div#liste-competences>h2');

console.log(elements);

// 2
// let random = Math.round(Math.random() * 100);
// let random2 = Math.round(Math.random() * 100);
// let random3 = Math.round(Math.random() * 100);
// let random4 = Math.round(Math.random() * 100);
// let random5 = Math.round(Math.random() * 100);

let competences = {
    html: "100%",
    css: "80%",
    js: "50%",
    react: "30%",
    laravel: "10%"
}





let count = 0;
for (let el in competences) {
    console.log(competences[el]);
    let titre = elements[count];
    titre.innerText += `: ${competences[el]}`

    let competenceLength = competences[el].length;
    let verif = competences[el].substr(0, competenceLength -1);

    if (verif > 50 && verif < 100 && verif != 50) {
        titre.style.backgroundColor = "green";
        titre.style.color ="white"
    } else if (verif == 100) {
        titre.style.backgroundColor = "gold"
    }  else if (verif < 50 ) {
        titre.style.backgroundColor = "red"
    }

    titre.style.width = `${verif}%`


    count++;
}



