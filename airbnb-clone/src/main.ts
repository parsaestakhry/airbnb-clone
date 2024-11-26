const hamburger = document.querySelector(".hamburger") as HTMLElement;
const menu = document.querySelector(".menu") as HTMLElement;
hamburger.addEventListener("click", () => {
menu.classList.toggle("active");
});
// slide show
const prevBtn = document.querySelector(".prev-btn")  as HTMLElement;
const nextBtn = document.querySelector(".next-btn")  as HTMLElement;
const iconSection = document.querySelector(".icon-section")  as HTMLElement;


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
    left: -iconSection.clientWidth,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  iconSection.scrollBy({
    left: iconSection.clientWidth,
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
  // where menu
const locations = document.querySelector(".where-box") as HTMLElement;
const locationMenu = document.querySelector(".region-select") as HTMLElement;
locations.addEventListener("click", () => {
  locationMenu.classList.toggle("active");
});
// exp searchbox
const expTab = document.querySelector (".exp");
const stayTab = document.querySelector(".stay");
const checkinBox= document.querySelector (".checkin-box");
const checkoutBox = document.querySelector (".checkout-box");
const dateBox = document.querySelector (".date-box");
expTab?.addEventListener("click",() =>{
checkinBox?.classList.add("display-none")
checkoutBox?.classList.add("display-none")
dateBox?.classList.remove("display-none")
}
)
stayTab?.addEventListener("click",() =>{
  checkinBox?.classList.remove("display-none")
  checkoutBox?.classList.remove("display-none")
  dateBox?.classList.add("display-none")
  }
  )
// plus-minus
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
let count = 0;
plusButton?.addEventListener("click",() =>{
count ++;
const element =   document.getElementById("adultCount")
if(element){
  element.innerHTML = count.toString()
}
}
);

minusButton?.addEventListener("click",() =>{
  count --;
  const element =   document.getElementById("adultCount")
  if(element){
    element.innerHTML = count.toString()
  }
  }
  );
