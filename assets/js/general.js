// Handle Option Register Target
function handleShowSearch() {
  const overlaySearch = document.querySelector(".header-overlay");
  const searchContent = document.querySelector(".header-search");
  const searchIconSearch = document.querySelector(
    ".header-search__mobile .icon-search"
  );
  const searchIconClose = document.getElementById("icon-close");

  const addClass = (element, className) => {
    element.classList.add(className);
  };

  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  const handleRemoveClass = (event) => {
    event.stopPropagation();
    removeClass(searchIconClose.closest(".header-search__mobile"), "active");
    removeClass(overlaySearch, "active");
    removeClass(searchContent, "active");
  };

  if (searchIconSearch) {
    searchIconSearch.addEventListener("click", (event) => {
      event.stopPropagation();
      addClass(overlaySearch, "active");
      addClass(searchContent, "active");
      addClass(searchIconSearch.closest(".header-search__mobile"), "active");
    });
  }

  if (searchIconClose) {
    searchIconClose.addEventListener("click", handleRemoveClass);
  }

  if (overlaySearch) {
    overlaySearch.addEventListener("click", handleRemoveClass);
  }
}

// function handleLoadMore() {
//   const btnMoreShow = document.querySelector(".height-zoom");
//   const btnMoreHide = document.querySelector(".height-small");

//   btnMoreShow.addEventListener("click", () => {
//     const parentMore = btnMoreShow.closest(".load-btn");

//     parentMore.previousElementSibling.classList.remove("load-more");
//     parentMore.classList.add("active");
//   });

//   btnMoreHide.addEventListener("click", () => {
//     const parentMore = btnMoreHide.closest(".load-btn");

//     parentMore.previousElementSibling.classList.add("load-more");
//     parentMore.classList.remove("active");
//   });
// }

(() => {
  handleShowSearch();
  // handleLoadMore();
})();
