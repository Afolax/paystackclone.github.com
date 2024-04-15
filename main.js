

const navbars = document.querySelector('.navs')
const header = document.querySelector('.header')
const mobileheader = document.querySelector('.mobile-header')
const mainContent = document.querySelectorAll('.main-content')
const mobileNav = document.querySelector('.mobile-nav')
const whyPaystack = document.querySelector('.why-paystack')
const learn = document.querySelector('.learn')
const more = document.querySelector('.more')
const moreList = document.querySelector('.mobile-more-about')
const mobileNavListAll =  document.querySelector('.mobile-nav-lists')
const mobileNavItems =  document.querySelector('.mobile-nav-items')
const subItem1 = document.querySelector('.mobile-nav-sub-items-1')
const newDisplays = document.querySelectorAll('.mobile-nav-sub-items-1')
const arrowDown = document.querySelectorAll('.arrow-down')
const arrowLeft = document.querySelectorAll('.arrow-left')





// Function to handle scroll event
var lastScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbarFixed = document.querySelector('.navs'); // selecting the fixed navbar
  var navbarDisappear = document.querySelector('.notification'); // selecting the disappearing navbar
  var mobilenavbarFixed = document.querySelector('.mobile-nav'); // selecting the fixed navbar
  var mobilenavbarDisappear = document.querySelector('.mobile-notification'); // selecting the disappearing navbar
  var mobileNavLists = document.querySelector('.mobile-nav-lists');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // If scrolling down
  if (scrollTop > lastScrollTop) {
    navbarFixed.style.opacity = "1"; // Hide the fixed navbar
    navbarDisappear.style.opacity = "0"; // Show the disappearing navbar
    mobilenavbarFixed.style.opacity = "1"; // Hide the fixed navbar
    mobilenavbarDisappear.style.opacity = "0"; // Show the disappearing navbar
    // newDisplays.style.top = "-4rem"
    navbarFixed.style.top = "-3rem"
    mobileNavLists.style.top = "-4rem"
    header.style.height = "3rem"
    mobilenavbarFixed.style.top = "-3rem"
    mobileheader.style.height = "3rem"

  } else { // If scrolling up
    navbarFixed.style.opacity = "1"; // Show the fixed navbar
    navbarDisappear.style.opacity = "1"; // Hide the disappearing navbar
    navbarFixed.style.top = "0"
    mobilenavbarFixed.style.opacity = "1"; // Show the fixed navbar
    mobilenavbarDisappear.style.opacity = "1"; // Hide the disappearing navbar
    // newDisplays.style.top = "-0.9rem"
    mobilenavbarFixed.style.top = "0"
    mobileNavLists.style.top = "-1rem"
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}
// 

// console.log(whyPaystack)
navbars.addEventListener('mouseover', (e) => {

  if(e.target.className == 'why-paystack'){

    whyPaystack.style.display = "grid"

  }
  else if(e.target.className == 'learn'){
    learn.style.display = 'grid'
  }
})



moreList.addEventListener('click', function(e){
  const ul = e.target;
       
  const moreItem = ul.querySelector('.more')
  const arrowd = e.target.querySelector('.arrow-down')
  const arrowl = e.target.querySelector('.arrow-left')
  // console.log(moreItem)
  if(moreItem.style.display === 'inline'){
    moreItem.style.display = 'none'
    arrowl.style.display = 'inline'
    arrowd.style.display = 'none'
  }
  else{
    moreItem.style.display = 'inline'
    arrowl.style.display = 'none'
    arrowd.style.display = 'inline'
  }

})


mobileNav.addEventListener('click', function(e){
  if(e.target.className === 'toggle-menu' && mobileNavListAll.style.display === 'none'  ){
    mobileNavListAll.style.display = 'block'
  }else{
    mobileNavListAll.style.display = 'none'
    newDisplays.forEach(function(newdisNow){
      newdisNow.style.display = 'none'
    })
  }
})




mobileNavItems.addEventListener('click', function(e){
  if(e.target.className == 'mobile-nav-item'){
    const targetPanel = document.querySelector(e.target.dataset.target)
    newDisplays.forEach(function(newDisplay){
      if(newDisplay ){
        mobileNavListAll.style.display = 'none'
        targetPanel.style.display = 'block'
      }else{
        mobileNavListAll.style.display = 'block'
        targetPanel.style.display = 'none'
      }
    })
  } 
})

newDisplays.forEach(function(newDisplay){

  newDisplay.addEventListener('click', function(e){
    console.log(e.target.className)
    if(e.target){
      mobileNavListAll.style.display = 'block'
      subItem1.style.display = 'none'
    }
  })
})

