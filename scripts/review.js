const reviewCountElement = document.querySelector("#review-count");
const productElement = document.querySelector("#submitted-product");
const ratingElement = document.querySelector("#submitted-rating");
const dateElement = document.querySelector("#submitted-date");
const reviewStorageKey = "reviewCount";
const params = new URLSearchParams(window.location.search);

function getReviewCount() {
    return Number(localStorage.getItem(reviewStorageKey)) || 0;
}

function saveReviewCount(count) {
    localStorage.setItem(reviewStorageKey, count);
}

function findProductName(productId) {
    const selectedProduct = products.find((product) => product.name === productId);
    return selectedProduct ? selectedProduct.name : "Not provided";
}

const newCount = getReviewCount() + 1;

saveReviewCount(newCount);
reviewCountElement.textContent = newCount;
productElement.textContent = findProductName(params.get("productName"));
ratingElement.textContent = params.get("overallRating")
    ? `${params.get("overallRating")} out of 5`
    : "Not provided";
dateElement.textContent = params.get("installDate") || "Not provided";
