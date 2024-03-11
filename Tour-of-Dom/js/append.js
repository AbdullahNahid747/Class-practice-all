const placesList = document.getElementById('places-list');
const li = document.createElement("li");
li.innerText = "Pahartoli bon";
placesList.appendChild(li);

// were to add
const mainContainet = document.getElementById('main-container');
// console.log(mainContainet)

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Kacchi Briani"
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='Borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='Lacchi'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText ='Doi'
ul.appendChild(li4);

section.appendChild(ul);

mainContainet.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shart</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainet.appendChild(sectionDress);