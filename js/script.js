import { getRndInteger } from "./utilities.js";
import { teamMembers } from "./db.js";

const myform = document.getElementById("addForm");
myform.addEventListener("submit", addMember);
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
    <div class="ccol-12 col-md-6 col-lg-4">
    <div class="team-card">
        <div class="card-image">
              <img src="img/${value.image}" alt="${value.name}" />
          </div>
          <div class="card-text">
              <h3>${value.name}</h3>
              <p>${value.role}</p>
          </div>
      </div>
    </div>
  `;
  }

  teamContainer.innerHTML = template;
}
