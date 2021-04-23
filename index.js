const baseURL = "https://cat-fact.herokuapp.com/";
const catURL = baseURL + "facts/random?animal_type=cat";
const dogURL = baseURL + "facts/random?animal_type=dog";
const horseURL = baseURL + "facts/random?animal_type=horse";

const cat = document.getElementById('catFact');
const dog = document.getElementById('dogFact');
const horse = document.getElementById('horseFact');
const catPic = document.getElementById('catPic');
const dogPic = document.getElementById('dogPic');
const horsePic = document.getElementById('horsePic');
const catCreds = document.getElementById('catCreds')
const dogCreds = document.getElementById('dogCreds');
const horseCreds = document.getElementById('horseCreds');

//could even do let catGet = async() => {function}
async function catGet(){
    let result1 = await fetch(catURL);
    let json = await result1.json();
    let catFacts = json.text;
    cat.innerHTML = catFacts;
    catPic.src = "./2-assets/catPhoto2.jpg";
    catCreds.innerHTML = "Photo by Oksana Simanovscaia on Unsplash";
}

document.getElementById('catGen').addEventListener('click', catGet)

async function dogGet(){
    let result2 = await fetch(dogURL);
    let json = await result2.json();
    let dogFacts = json.text;
    dog.innerHTML = dogFacts;
    dogPic.src = "./2-assets/dogPhoto2.jpg";
    dogCreds.innerHTML = "Photo by Roberto Nickson on Unsplash";
}
document.getElementById('dogGen').addEventListener('click', dogGet)

async function horseGet(){
    let result3 = await fetch(horseURL);
    let json = await result3.json();
    let horseFacts = json.text;
    horse.innerHTML = horseFacts;
    horsePic.src = "./2-assets/horsePhoto2.jpg";
    horseCreds.innerHTML = "Photo by Mikael Kristenson on Unsplash";
}
document.getElementById('horseGen').addEventListener('click', horseGet)

