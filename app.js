const pdContainer = document.getElementById("product");
const pdName = document.getElementById("pdName");
const pdQut = document.getElementById("pdQut");
const addPd = document.getElementById("addPd");

addPd.addEventListener("click", () => {
  const name = pdName.value;
  const qty = pdQut.value;
  displayProduct({ name, qty });
});

const getLocal = () => {
  let prevData = localStorage.getItem("cart");
  if (prevData) {
    return JSON.parse(prevData);
  }
  return [];
};

const setLocal = (data) => {
  let prevLcoal = getLocal();
  let stringData = JSON.stringify([...prevLcoal, { ...data }]);
  localStorage.setItem("cart", stringData);
};

const displayProduct = (data) => {
  const li = document.createElement("li");
  li.innerHTML = `Name: ${data.name}, Quantity: ${data.qty}`;
  pdContainer.appendChild(li);
  setLocal(data);
};

const displayPrev = () => {
  let prevData = localStorage.getItem("cart");
  if (prevData) {
    let parsed = JSON.parse(prevData);
    parsed.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `Name: ${item.name}, Quantity: ${item.qty}`;
      pdContainer.appendChild(li);
    });
  }
};

displayPrev();
