function displayMenu(){
  document.querySelector('.span_class').addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
});
}

function blurBackground(){
  document.querySelector('.span_class').addEventListener('click', () => {
    document.querySelector('.background').classList.toggle('blur');
});
}
function changeAppearance(){
  displayMenu()
  blurBackground()
}

function closeMenu(){
  document.querySelector('.close_icon').addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
  });
}

function unblurBackground(){
  document.querySelector('.span_class').addEventListener('click', () => {
    document.querySelector('.background').classList.toggle('blur');
});
}

function returnAppearanceToNormal(){
  closeMenu()
  unblurBackground()
}

document.querySelectorAll('.navlist-item-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
  });
});