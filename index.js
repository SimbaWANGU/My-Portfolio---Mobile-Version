/* eslint-disable no-unused-vars */

const projects = [{
  id: 1,
  name: 'Tonic',
  title: 'CANOPY',
  counter: './assets/Counter.png',
  type: 'Back End Dev',
  date: '2015',
  tools1: 'css',
  tools2: 'javascript',
  tools3: 'html',
  image: './assets/Snapshoot_Portfolio.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  livelink: 'https://google.com/',
  srclink: 'https://google.com/Src',
},
{
  id: 2,
  name: 'Multi-Post Stories',
  title: 'CANOPY',
  counter: './assets/Counter.png',
  type: 'Back End Dev',
  date: '2015',
  tools1: 'css',
  tools2: 'javascript',
  tools3: 'html',
  image: './assets/Snapshoot_Portfolio1.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  livelink: 'https://google.com/',
  srclink: 'https://google.com/Src',
},
{
  id: 3,
  name: 'Tonic',
  title: 'CANOPY',
  counter: './assets/Counter.png',
  type: 'Back End Dev',
  date: '2015',
  tools1: 'css',
  tools2: 'javascript',
  tools3: 'html',
  image: './assets/Snapshoot_Portfolio.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  livelink: 'https://google.com/',
  srclink: 'https://google.com/Src',
},
{
  id: 4,
  name: 'Multi-Post Stories',
  title: 'CANOPY',
  counter: './assets/Counter.png',
  type: 'Back End Dev',
  date: '2015',
  tools1: 'css',
  tools2: 'javascript',
  tools3: 'html',
  image: './assets/Snapshoot_Portfolio1.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
  livelink: 'https://google.com/',
  srclink: 'https://google.com/Src',
},
];

function openModal(id) {
  projects.forEach((project) => {
    if (id === project.id) {
      document.querySelector('.popup_title').innerText = project.name;
      document.querySelector('.popup_image').setAttribute('src', project.image);
      document.getElementById('canopy_text').innerText = project.title;
      document.getElementById('dev-type').innerText = project.type;
      document.getElementById('date').innerText = project.date;
      document.querySelector('.project-popup-paragraph').innerText = project.description;
      document.getElementById('html_text').innerText = project.tools3;
      document.getElementById('css_text').innerText = project.tools1;
      document.getElementById('js_text').innerText = project.tools2;
      document.getElementById('live-link').setAttribute('href', project.livelink);
      document.getElementById('source-link').setAttribute('href', project.srclink);
    }
  });
  document.querySelector('.popup-window-container').classList.toggle('hide');
}
document.querySelector('.popup_close_icon').addEventListener('click', () => {
  document.querySelector('.popup-window-container').classList.toggle('hide');
});
const WorkSection = document.getElementById('Portfolio');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.classList.add('project');
  const img = document.createElement('img');
  img.classList.add('project_img');
  img.setAttribute('alt', 'Project Image');
  img.setAttribute('src', project.image);
  div.appendChild(img);
  const h2Title = document.createElement('h2');
  h2Title.classList.add('project_title');
  h2Title.innerText = project.name;
  div.appendChild(h2Title);
  const listItem1 = document.createElement('li');
  listItem1.classList.add('list_items');
  const p = document.createElement('p');
  p.classList.add('list_items_text');
  p.setAttribute('id', 'canopy_text');
  p.append(document.createTextNode(project.title));
  listItem1.appendChild(p);
  const listItem2 = document.createElement('li');
  listItem2.classList.add('list_items');
  const listImg = document.createElement('img');
  listImg.setAttribute('src', project.counter);
  listImg.setAttribute('alt', '');
  listImg.classList.add('counter_class');
  listItem2.appendChild(listImg);
  const listItem3 = document.createElement('li');
  listItem3.classList.add('list_items');
  const p2 = document.createElement('p');
  p2.classList.add('list_items_text_other');
  p2.append(document.createTextNode(project.type));
  listItem3.appendChild(p2);
  const listItem4 = document.createElement('li');
  listItem4.classList.add('list_items');
  const listImg2 = document.createElement('img');
  listImg2.setAttribute('src', project.counter);
  listImg2.setAttribute('alt', '');
  listImg2.classList.add('counter_class');
  listItem4.appendChild(listImg2);
  const listItem5 = document.createElement('li');
  listItem5.classList.add('list_items');
  const p3 = document.createElement('p');
  p3.classList.add('list_items_text_other');
  p3.append(document.createTextNode(project.date));
  listItem5.appendChild(p3);
  const ul = document.createElement('ul');
  ul.classList.add('project_details');
  ul.appendChild(listItem1);
  ul.appendChild(listItem2);
  ul.appendChild(listItem3);
  ul.appendChild(listItem4);
  ul.appendChild(listItem5);
  div.appendChild(ul);
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project_description');
  projectDescription.append(document.createTextNode(project.description));
  div.appendChild(projectDescription);
  const ul2 = document.createElement('ul');
  ul2.classList.add('technology_used');
  const pHtml = document.createElement('p');
  pHtml.classList.add('technology_text');
  pHtml.append(document.createTextNode(project.tools2));
  const pCss = document.createElement('p');
  pCss.classList.add('technology_text');
  pCss.append(document.createTextNode(project.tools1));
  const pJs = document.createElement('p');
  pJs.classList.add('technology_text');
  pJs.append(document.createTextNode(project.tools1));
  const liTechnology1 = document.createElement('li');
  liTechnology1.classList.add('technology');
  liTechnology1.appendChild(pHtml);
  const liTechnology2 = document.createElement('li');
  liTechnology2.classList.add('technology');
  liTechnology2.appendChild(pCss);
  const liTechnology3 = document.createElement('li');
  liTechnology3.classList.add('technology');
  liTechnology3.appendChild(pJs);
  ul2.appendChild(liTechnology1);
  ul2.appendChild(liTechnology2);
  ul2.appendChild(liTechnology3);
  const button = document.createElement('button');
  button.classList.add('project_button');
  button.setAttribute('type', 'submit');
  button.setAttribute('onclick', `openModal(${project.id})`);
  button.append(document.createTextNode('See Project'));
  div.appendChild(ul2);
  div.appendChild(button);
  WorkSection.appendChild(div);
});

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

const Form = document.querySelector('.form-validation');
const Email = document.getElementById('email');
const Msg = document.querySelector('#Error-msg');
const reg = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

Form.addEventListener('submit', (e) => {
  if (!reg.test(Email.value)) {
    Msg.innerHTML = 'Error: Email should be lowercase';
    e.preventDefault();
  }
});