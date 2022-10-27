let result = document.getElementById("result");
let filter = document.getElementById("filter");
let listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  let res = await fetch("https://randomuser.me/api?results=50");
  let { results } = await res.json();
  result.innerHTML = "";

  results.forEach((user) => {
    let li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
      <img class="user-img rounded-circle" src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    li.className = "p-3";
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

getData();
filterData();
