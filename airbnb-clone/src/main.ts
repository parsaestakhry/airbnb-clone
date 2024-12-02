const hamburger = document.querySelector(".hamburger") as HTMLElement;
const menu = document.querySelector(".menu") as HTMLElement;
hamburger.addEventListener("click", () => {
menu.classList.toggle("active");
});
// slide show
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconSection = document.querySelector(".icon-section");

const scrollAmount = 1000; // Number of pixels to scroll

function updateButtonVisibility() {
  if (iconSection.scrollLeft === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (iconSection.scrollLeft + iconSection.clientWidth >= iconSection.scrollWidth) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

prevBtn.addEventListener("click", () => {
  iconSection.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  iconSection.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

iconSection.addEventListener("scroll", updateButtonVisibility);
updateButtonVisibility();
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

  //
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabContents.forEach((content) => {
      (content as HTMLElement).style.display = 'none';
    });
  
    (tabContents[0] as HTMLElement).style.display = 'block';
    (tabs[0] as HTMLElement).setAttribute('aria-selected', 'true');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {

        tabContents.forEach((content) => {
          (content as HTMLElement).style.display = 'none';
        });
      
        tabs.forEach((tab) => {
          (tab as HTMLElement).setAttribute('aria-selected', 'false');
        });
      
        (tabContents[index] as HTMLElement).style.display = 'block';
        
        (tabs[index] as HTMLElement).setAttribute('aria-selected', 'true');
      });
    });
  });
  
  
  