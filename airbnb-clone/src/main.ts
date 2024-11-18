const hamburger = document.querySelector(".hamburger") as HTMLElement;
const menu = document.querySelector(".menu") as HTMLElement;
hamburger.addEventListener("click", () => {
menu.classList.toggle("active");
});
// who-menu
const guests = document.querySelector(".guests-box") as HTMLElement;
const guestMenu = document.querySelector(".who-menu") as HTMLElement;
guests.addEventListener("click", () => {
guestMenu.classList.toggle("active");
});
const searchItems = document.querySelectorAll(".search-item");
const searchBar = document.querySelector(".search-bar") as HTMLElement;
const activeSearchItems = (selectedItem: Element) => {
    selectedItem?.addEventListener("click", function () {
        searchItems?.forEach((item) => item.classList.remove("bg-white"));
      selectedItem.classList.toggle("bg-white");
      searchBar?.classList.add("bg-grey");
    });
  };

  searchItems.forEach(item=> activeSearchItems(item))

