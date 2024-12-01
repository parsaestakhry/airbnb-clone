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

// check in
const checkIn = document.querySelector(".checkin-box") as HTMLElement;
const checkOut = document.querySelector(".checkout-box") as HTMLElement;
const checkInCal = document.querySelector(".checkin-container") as HTMLElement;
checkIn.addEventListener("click", () => {
  checkInCal.classList.toggle("active");
});
let checkinDate = ""
let checkoutDate = ""
let days ;
const dateChanged = () => {
  console.log("date changed")
  console.log({checkinDate, checkoutDate})
}
$(function () {
  // Initialize the Date Range Picker
  $('#daterange').daterangepicker({
    opens: 'right',
    autoApply: true,
    autoUpdateInput: false,
    locale: {
      format: 'YYYY-MM-DD',
    },
  });

  const picker = $('#daterange').data('daterangepicker');
  $('#daterange').on('apply.daterangepicker', function(ev, picker) {
    checkinDate = picker.startDate.format('YYYY-MM-DD')
checkoutDate = picker.endDate.format('YYYY-MM-DD')
dateChanged()
});
  // Keep the picker always visible
  picker.show();
  picker.container.appendTo('#daterange'); // Append to the div

  // Override default hide behavior to prevent automatic closing
  picker.hide = function () { };
 
})


