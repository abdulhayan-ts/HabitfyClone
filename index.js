let dashboard = document.getElementById("dashboard");

function displayCards(habits) {
  dashboard.innerHTML = "";
  habits.forEach((habit, index) => {
    dashboard.innerHTML += ` <div class="dashboard-card d-flex align-items-center pt-2">
<div class="d-flex align-items-center justify-content-center dashboard-question ms-2">
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
    style="fill: rgb(42, 168, 208); fill-opacity: 1; user-select: auto;">
    <path d="M25.0926 13C19.9811 13 17.0825 15.8638 17 20.0093V20.2167H21.5125V20.0093C21.6114 18.1783 22.8781
         16.997 24.7926 16.997C26.6906 16.997 27.956 18.0943 27.956 19.6428C27.956 21.1913 27.3066 21.9908 25.1591
          23.2733C22.8611 24.6218 21.9443 26.1205 22.1608 28.7845L22.187 29.4953H26.6068V28.8188C26.6068 27.2208 27.2235
           26.4033 29.438 25.1218C31.7854 23.7393 33 21.9918 33 19.4938C33 15.6473 29.8546 13 25.0926 13ZM24.4926 32.5882C22.7987
            32.5882 21.742 33.5716 21.742 35.1737C21.742 36.7614 22.7997 37.743 24.4926 37.743C26.1854 37.743 27.229 36.7614 27.229
             35.1737C27.229 33.5716 26.1864 32.5882 24.4926 32.5882Z" style="user-select: auto;">
    </path>
  </svg>

</div>
<div
  class="d-flex align-items-center justify-content-between dashboard-rest-card ms-2 border-bottom pe-2 pb-2">
  <div class="">
    <p class="m-0 card-title">${habit.name}</p>
    <span class="card-timings">X</span>
    <span class="card-timings">/</span>
    <span class="card-timings">X</span>
    <span class="card-timings">times</span>
  </div>
  <div class="d-flex ">
    <button class="dashboard-done border px-1 px-sm-2 me-2">
      <i class="fa-solid fa-check mx-1"></i> <span>Done</span>
    </button>
    <div class="dropdown">
      <button class="dashboard-done border px-2 px-sm-3 " type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <ul id="card-edit-menu" class="dropdown-menu">
        <li>
          <i id="habits-icons" class="fa-solid fa-check d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Check-In</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-arrow-right d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Skip</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-x d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Fail</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-keyboard d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Log Process</a>
        </li>
        <li  role="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="editCard(${index})">
          <i id="habits-icons" class="fa-solid fa-pen d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Edit</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-chart-column d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">View Progress</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>`;
  });
}
let habits = localStorage.getItem("habits") || JSON.stringify([]);
habits = JSON.parse(habits);
window.addEventListener("load", displayCards(habits));

// --------------------------------------------search---------------------------------------//
const search = document.getElementById("nav-bar-search");
search.addEventListener("click", () => {
  document.getElementById("nav-bar-search-bar").style.display = "block";
  const elements = document.querySelectorAll(".nav-bar-inner-display");
  elements.forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("nav-bar-calender").style.padding = "1.1vh 0.8vw";
  document.getElementById("nav-bar-habits").style.padding = "1.1vh 0.8vw";
  //   document.getElementById("nav-bar-calender-icon").style.display = "inline"
});

document.addEventListener("click", function (event) {
  if (event.target.closest("#nav-bar-search")) return;
  document.getElementById("nav-bar-search-bar").style.display = "none";
  document.getElementById("nav-bar-search-bar").value = "";
  let habits = localStorage.getItem("habits") || JSON.stringify([]);
  habits = JSON.parse(habits);
  displayCards(habits);
  const elements = document.querySelectorAll(".nav-bar-inner-display");
  elements.forEach((element) => {
    element.style.display = "inline";
  });
  document.getElementById("nav-bar-calender").style.padding = "0.7vh 0.8vw";
  document.getElementById("nav-bar-habits").style.padding = "0.7vh 0.8vw";
});

// ------------------------------------------------------------

const leftbarItems = document.querySelectorAll(".leftbar-items");
const leftbarText = document.querySelectorAll(".all-habits-name");
function activeClassLeftbar() {
  if (leftbarItems) {
    leftbarItems.forEach((item) =>
      item.classList.remove("leftbar-items-active")
    );
    this.classList.add("leftbar-items-active");
  }
  if (leftbarText) {
    leftbarText.forEach((item) =>
      item.classList.remove("all-habits-name-active")
    );
    this.classList.add("all-habits-name-active");
  }
}
leftbarItems.forEach((item) =>
  item.addEventListener("click", activeClassLeftbar)
);

// --------------------------------------------------------------

document.getElementById("newHabit").addEventListener("click", () => {
  document.getElementById("habitname").value = "";
  document.getElementById("habitReminder").value = "";
  document.getElementById("buttons-for-edit").innerHTML = "";
  document.getElementById(
    "buttons-for-save"
  ).innerHTML = `   <button class="dashboard-done border px-1 px-sm-2 me-1" data-bs-dismiss="modal">
  Cancel
  </button>
  <button class="dashboard-done border px-1 px-sm-2 me-2 bg-primary text-white" id="saveHabits" data-bs-dismiss="modal">
  Save
  </button>`;
  document.getElementById("saveHabits").addEventListener("click", addNewHabit);
});

// ------------------------------------------------local storage-----------------------------------

//newhabits
const addNewHabit = () => {
  let newhabits;
  let habitname = document.getElementById("habitname").value;
  let habitReminder = document.getElementById("habitReminder").value;
  let obj = {
    name: habitname,
    reminder: habitReminder,
  };
  let habits = localStorage.getItem("habits") || JSON.stringify([]);
  habits = JSON.parse(habits);
  newhabits = [obj, ...habits];
  localStorage.setItem("habits", JSON.stringify(newhabits));
  displayCards(newhabits);
};

// ----------------------------------------edit cards---------------------------------

function editCard(id) {
  document.getElementById(
    "buttons-for-edit"
  ).innerHTML = ` <button class="dashboard-done border px-1 px-sm-2 me-1 text-danger" onClick="deleteCard(${id})" data-bs-dismiss="modal">
  Delete
</button>
<button class="dashboard-done border px-1 px-sm-2 me-2">
  Archive
</button>`;
  document.getElementById(
    "buttons-for-save"
  ).innerHTML = `   <button class="dashboard-done border px-1 px-sm-2 me-1" data-bs-dismiss="modal">
Cancel
</button>
<button class="dashboard-done border px-1 px-sm-2 me-2 bg-primary text-white" id="editHabits" data-bs-dismiss="modal">
Save
</button>`;
  let habits = localStorage.getItem("habits") || JSON.stringify([]);
  habits = JSON.parse(habits);
  document.getElementById("habitname").value = habits[id].name;
  document.getElementById("habitReminder").value = habits[id].reminder;
  document
    .getElementById("editHabits")
    .addEventListener("click", function _listner() {
      habits[id].name = document.getElementById("habitname").value;
      habits[id].reminder = document.getElementById("habitReminder").value;
      localStorage.setItem("habits", JSON.stringify(habits));
      displayCards(habits);
    });
}

// ----------------------------------------delete cards---------------------------------

function deleteCard(id) {
  let habits = localStorage.getItem("habits") || JSON.stringify([]);
  habits = JSON.parse(habits);
  if (id > -1) {
    habits.splice(id, 1);
  }
  localStorage.setItem("habits", JSON.stringify(habits));
  displayCards();
}

// -------------------------------------------search-----------------------------------------

document
  .getElementById("nav-bar-search-bar")
  .addEventListener("input", (event) => {
    let indexes = [];
    let saerchQWuery = event.target.value.toLowerCase();
    let habits = localStorage.getItem("habits") || JSON.stringify([]);
    habits = JSON.parse(habits);
    if (!saerchQWuery) {
      displayCards(habits);
      return;
    }
    console.log(habits);

    let newHabits = habits.filter((habit) =>
      habit.name.toLowerCase().includes(saerchQWuery)
    );
    console.log(newHabits);
    indexes = newHabits.map((item) => habits.indexOf(item));
    console.log(indexes);
    dashboard.innerHTML = "";
    newHabits.forEach((habit, index) => {
      dashboard.innerHTML += ` <div class="dashboard-card d-flex align-items-center pt-2">
<div class="d-flex align-items-center justify-content-center dashboard-question ms-2">
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
    style="fill: rgb(42, 168, 208); fill-opacity: 1; user-select: auto;">
    <path d="M25.0926 13C19.9811 13 17.0825 15.8638 17 20.0093V20.2167H21.5125V20.0093C21.6114 18.1783 22.8781
         16.997 24.7926 16.997C26.6906 16.997 27.956 18.0943 27.956 19.6428C27.956 21.1913 27.3066 21.9908 25.1591
          23.2733C22.8611 24.6218 21.9443 26.1205 22.1608 28.7845L22.187 29.4953H26.6068V28.8188C26.6068 27.2208 27.2235
           26.4033 29.438 25.1218C31.7854 23.7393 33 21.9918 33 19.4938C33 15.6473 29.8546 13 25.0926 13ZM24.4926 32.5882C22.7987
            32.5882 21.742 33.5716 21.742 35.1737C21.742 36.7614 22.7997 37.743 24.4926 37.743C26.1854 37.743 27.229 36.7614 27.229
             35.1737C27.229 33.5716 26.1864 32.5882 24.4926 32.5882Z" style="user-select: auto;">
    </path>
  </svg>

</div>
<div
  class="d-flex align-items-center justify-content-between dashboard-rest-card ms-2 border-bottom pe-2 pb-2">
  <div class="">
    <p class="m-0 card-title">${habit.name}</p>
    <span class="card-timings">X</span>
    <span class="card-timings">/</span>
    <span class="card-timings">X</span>
    <span class="card-timings">times</span>
  </div>
  <div class="d-flex ">
    <button class="dashboard-done border px-1 px-sm-2 me-2">
      <i class="fa-solid fa-check mx-1"></i> <span>Done</span>
    </button>
    <div class="dropdown">
      <button class="dashboard-done border px-2 px-sm-3 " type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <ul id="card-edit-menu" class="dropdown-menu">
        <li>
          <i id="habits-icons" class="fa-solid fa-check d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Check-In</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-arrow-right d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Skip</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-x d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Fail</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-keyboard d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Log Process</a>
        </li>
        <li  role="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="editCard(${indexes[index]})">
          <i id="habits-icons" class="fa-solid fa-pen d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">Edit</a>
        </li>
        <li>
          <i id="habits-icons" class="fa-solid fa-chart-column d-inline fs-sm ps-2"></i><a
            class="dropdown-item d-inline ms-1 ps-2" href="#">View Progress</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>`;
    });
  });

  // --------------------------------------logout--------------------------------------


