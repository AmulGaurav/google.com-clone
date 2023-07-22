const searchInput = document.querySelector(".search-input");

function search() {
  if (searchInput.value === "") {
  } else {
    document.location.href =
      "https://www.google.com/search?q=" + searchInput.value;
    searchInput.value = "";
  }
}

function feelingLucky() {
  document.location.href = "https://www.google.com/doodles";
}
