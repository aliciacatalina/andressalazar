new fullpage('#fullpage', {
autoScrolling:true,
fixedElements: '#header',
scrollHorizontally: true,
onLeave: function(origin, destination, direction, trigger){
  var leavingSection = this;
  const headerTitle = document.getElementById('header-title');

  switch (destination.index) {
    case 0:
      headerTitle.textContent = "Hi";
      break;
    case 1:
      headerTitle.textContent = "Professional Experience";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      headerTitle.textContent = "Selected Work";
      break;
    case 8:
      headerTitle.textContent = "The end";
      break;
    default:
      headerTitle.textContent = "Hi"


  }
}
});

// Menu handlers
const menuItems = document.querySelectorAll('.menu');

menuItems.forEach((item, i) => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const menuSlide = event.target.getAttribute('data-slide');
    toggleMenuItemVisibility(menuSlide);
  })
});

function toggleMenuItemVisibility(menuSlide) {
  const menuSlideItem = document.getElementById(`${menuSlide}`);
  const menuItems = Array.from(document.querySelectorAll('.menu-slide'));
  menuItems.map(item => {
    if (item == menuSlideItem) return;
    // hide any other menu items that were visible before
    item.classList.contains('visible') && item.classList.remove('visible')
  });

  menuSlideItem.classList.toggle('visible');

}
