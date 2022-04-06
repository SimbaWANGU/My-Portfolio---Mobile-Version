const projects = [
  {
    id:1,
    name:'Tonic',
    title:'CANOPY',
    type:'Back End Dev',
    date:'2015',
    tools:['css','javascript','html'],
    image:'./assets/Snapshoot_Portfolio.png',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required',
    livelink:'https://google.com/',
    srclink:'https://google.com/Src'
  },
  {
    id:2,
    name:'Multi-Post Stories',
    title:'CANOPY',
    type:'Back End Dev',
    date:'2015',
    tools:['css','javascript','html'],
    image:'./assets/Snapshoot_Portfolio1.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    livelink:'https://google.com/',
    srclink:'https://google.com/Src'
  },
  {
    id:3,
    name:'Tonic',
    title:'CANOPY',
    type:'Back End Dev',
    date:'2015',
    tools:['css','javascript','html'],
    image:'./assets/Snapshoot_Portfolio.png',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required',
    livelink:'https://google.com/',
    srclink:'https://google.com/Src'
  },
  {
    id:4,
    name:'Multi-Post Stories',
    title:'CANOPY',
    type:'Back End Dev',
    date:'2015',
    tools:['css','javascript','html'],
    image:'./assets/Snapshoot_Portfolio1.png',
    description : 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    livelink:'https://google.com/',
    srclink:'https://google.com/Src'
  },
]
const WorkSection = document.getElementById('Portfolio');
projects.forEach(project => {
  let div = document.createElement('div');
  div.classList.add('project');
  let img = document.createElement('img');
  img.classList.add('project_img');
  img.setAttribute('alt','Project Image');
  img.setAttribute('src',project.image);
  div.appendChild(img);
  WorkSection.appendChild(div);
})

document.querySelector('.span_class').addEventListener('click', () => {
  document.querySelector('.menu_item_container').classList.toggle('show');
  document.querySelectorAll('.mobile_background').forEach((section) => {
    section.classList.toggle('blur');
  });
});
document.querySelector('.close_icon').addEventListener('click', () => {
  document.querySelector('.menu_item_container').classList.toggle('show');
  document.querySelectorAll('.mobile_background').forEach((section) => {
    section.classList.toggle('blur');
  });
});

document.querySelectorAll('.navlist-item-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
    document.querySelectorAll('.mobile_background').forEach((section) => {
      section.classList.toggle('blur');
    });
  });
});
