let login = document.querySelector("#right1");
console.log(login);
let particularUser = JSON.parse(localStorage.getItem("particularUser"));
console.log(particularUser);
let maleCont = document.querySelector("#maleCont");
let femaleCont = document.querySelector("#femaleCont");
let kidsCont = document.querySelector("#kidsCont");
let popup = document.querySelector("#popup");
let electronicsCont = document.querySelector("#electronicsCont");
let x = document.querySelector("#x");

x.addEventListener("click", () => {
  popup.style.right = "-100%";
});

console.log(maleCont, femaleCont, kidsCont);
if (particularUser) {
  login.innerHTML = `<span>${particularUser.first}</span>
    <a href="./ecommerce.html" id="logout"><button>logout</button></a>
    `;
  let logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    localStorage.removeItem("particularUser");
  });
}

async function fetchData() {
  let dataFromServer = await fetch(
    " https://www.shoppersstack.com/shopping/products/alpha"
  );
  let allData = await dataFromServer.json();

  console.log(dataFromServer);
  console.log(allData.data);

  let maleData = allData.data.filter((e) => {
    if (e.category == "men") {
      return e;
    }
  });

  console.log(maleData);

  maleData.map((e) => {
    maleCont.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>${e.name}</h2>
        <h3>${e.price}</h3>
        <h4>${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`;
  });

  let femaleData = allData.data.filter((e) => {
    if (e.category == "women") {
      return e;
    }
  });
  console.log(femaleData);
  femaleData.map((e) => {
    femaleCont.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="productImage">
        <h2>${e.name}</h2>
        <h3>${e.price}</h3>
        <h4>${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`;
  });

  let kidsData = allData.data.filter((e) => {
    if (e.category == "kids") {
      return e;
    }
  });
  console.log(kidsData);
  kidsData.map((e) => {
    kidsCont.innerHTML += `<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h2>${e.name}</h2>
        <h3>${e.price}</h3>
        <h4>${e.rating}</h4>
        <button class="btn">Add to Cart</button>
    </div>`;
  });

  let electronicsData = allData.data.filter((e) => {
    if (e.category == "electronics") {
      return e;
    }
  });
  console.log(electronicsData);
  electronicsData.map((e) => {
    kidsCont.innerHTML += `<div id="${e.productId}">
    <img src="${e.productImageURLs[0]}" alt="">
    <h2>${e.name}</h2>
    <h3>${e.price}</h3>
    <h4>${e.rating}</h4>
    <button class="btn">Add to Cart</button>
</div>`;

    let btn = document.querySelectorAll(".btn");
    btn.forEach((e) => {
      e.addEventListener("click", () => {
        popup.style.right = "0";
      });
    });
  });
}
fetchData();
