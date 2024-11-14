import { getRndInteger } from "./utilities.js";
import { teamMembers } from "./db.js";

const myform = document.getElementById("addForm");
myform.addEventListener("submit", addMember);

const teamContainer = document.querySelector(".team-container");

drawCard();

function addMember(event) {
  event.preventDefault();
  event.stopPropagation();
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const image = document.getElementById("image").value;

  const newMember = {
    name,
    role,
    image,
  };
  console.log(newMember);
  teamMembers.push(newMember);
  drawCard();
}
function drawCard() {
  let template = "";
  const teamContainer = document.querySelector(".team-container");

  for (let value of teamMembers) {
    template += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="team-card card">
            <img src="img/${value.image}" alt="${value.name}" class="card-img-top" />
            <div class="card-text">
                <h3>${value.name}</h3>
                <p>${value.role}</p>
            </div>
              <div class="trash text-end p-4">
                <i class="fa-solid fa-trash"></i>
              </div>
        </div>
    </div>
  `;
  }

  teamContainer.innerHTML = template;
  const trashList = document.querySelectorAll(".fa-trash");

  //  console.log(trashList);
  for (let i = 0; i < trashList.length; i++) {
    trashList[i].addEventListener("click", () => {
      //       //console.log(i);
      deleteMember(i); //cambiare il tipo di ciclo
    });
  }
}
// function drawCard() {
//   for (let i = 0; i < teamMembers.length; i++) {
//     //const value = teamMembers[i];
//     const { name, role, image } = teamMembers[i];
//     //console.log(value);

//     //Creo la col
//     const newCol = document.createElement("div"); //mi sto ripetendo
//     newCol.className = "col-12 col-md-6 col-lg-4";

//     //Creo la card
//     const newCard = document.createElement("div");
//     newCard.className = "team-card card";

//     //Questo conviene con innerHTML piuttosto che creare tutti gli elementi
//     const template = `
//       <img src="img/${image}" alt="${name}" class="card-img-top"/>
//       <div class="card-text">
//         <h3>${name}</h3>
//         <p>${role}</p>
//       </div>
//   `;
//     newCard.innerHTML = template;

//     // creo il div per l'icona
//     const divTrash = document.createElement("div");
//     divTrash.className = "trash text-end p-4";

//     //creo l'icona
//     const iconTrash = document.createElement("i");
//     iconTrash.className = "fa-solid fa-trash";

//     //aggiungo event listener all'icona
//     iconTrash.addEventListener("click", () => {
//       //console.log(i);
//       deleteMember(i); //cambiare il tipo di ciclo
//     });

//     //appendo l'icona al div trash
//     divTrash.appendChild(iconTrash);

//     //appendo il div trash alla card
//     newCard.appendChild(divTrash);

//     //appendo la card alla col
//     newCol.appendChild(newCard);

//     //appendo la col al container
//     teamContainer.appendChild(newCol);
//   }
// }

function deleteMember(index) {
  teamMembers.splice(index, 1);
  teamContainer.innerHTML = "";
  drawCard();
}

function createEl(el, ...classes) {}
