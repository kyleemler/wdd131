const productSelect = document.querySelector("#productName");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.append(option);
});
