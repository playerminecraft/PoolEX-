// Handle Option Register Target
function handleShowSearch() {
  const overlaySearch = document.querySelector(".header-overlay");
  const searchContent = document.querySelector(".header-search");
  const searchIconSearch = document.querySelector(".header-search__mobile .icon-search");
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

// Start Header Scroll Change
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-bottom").addClass("active");
    } else {
      $(".header-bottom").removeClass("active");
    }
  });
});
// End Header Scroll Change

//Start updateText
$(document).ready(function () {
  function updateText() {
    if ($(window).width() <= 768) {
      $(".header-search__top .form-control").attr("placeholder", "Tìm Kiếm...");
      $(".sell-btn").text("XEm thêm");
    } else {
      $(".header-search__top .form-control").attr("placeholder", "Tìm Kiếm sản phẩm, Danh mục mong muốn....");
      $(".sell-btn").text("Cửa hàng ");
    }
  }
  updateText();
  $(window).resize(function () {
    updateText();
  });
});
//End updateText

(() => {
  handleShowSearch();
  // handleLoadMore();
})();
