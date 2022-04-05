
  document.querySelector('.span_class').addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
    document.querySelectorAll('.mobile_background').forEach((section)=>{
      section.classList.toggle('blur');
    })
});
document.querySelector('.close_icon').addEventListener('click', () => {
  document.querySelector('.menu_item_container').classList.toggle('show');
  document.querySelectorAll('.mobile_background').forEach((section)=>{
    section.classList.toggle('blur');
  })
});

document.querySelectorAll('.navlist-item-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
    document.querySelectorAll('.mobile_background').forEach((section)=>{
      section.classList.toggle('blur');
    })
  });
});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);