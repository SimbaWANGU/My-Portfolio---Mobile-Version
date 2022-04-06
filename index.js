const projects = [
  {
    id: 1,
    name: "Tonic 1",
    title: "CANOPY",
    counter: "./assets/Counter.png",
    type: "Back End Dev",
    date: "2015",
    tools: ["css", "javascript", "html"],
    image: "./assets/Snapshoot_Portfolio.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    livelink: "https://google.com/",
    srclink: "https://google.com/Src",
  },
  {
    id: 2,
    name: "Multi-Post Stories 2",
    title: "CANOPY",
    counter: "./assets/Counter.png",
    type: "Back End Dev",
    date: "2015",
    tools: ["css", "javascript", "html"],
    image: "./assets/Snapshoot_Portfolio1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    livelink: "https://google.com/",
    srclink: "https://google.com/Src",
  },
  {
    id: 3,
    name: "Tonic 3",
    title: "CANOPY",
    counter: "./assets/Counter.png",
    type: "Back End Dev",
    date: "2015",
    tools: ["css", "javascript", "html"],
    image: "./assets/Snapshoot_Portfolio.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    livelink: "https://google.com/",
    srclink: "https://google.com/Src",
  },
  {
    id: 4,
    name: "Multi-Post Stories 4",
    title: "CANOPY",
    counter: "./assets/Counter.png",
    type: "Back End Dev",
    date: "2015",
    tools: ["css", "javascript", "html"],
    image: "./assets/Snapshoot_Portfolio1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    livelink: "https://google.com/",
    srclink: "https://google.com/Src",
  },
];
function openModal(id) {
  projects.forEach(project => {
    if (id === project.id) {
      document.querySelector(".popup_title").innerText = project.name;
    }
  })
  document.querySelector(".popup-window-container").classList.toggle("hide");
}
document.querySelector(".popup_close_icon").addEventListener('click',()=>{
  document.querySelector(".popup-window-container").classList.toggle("hide");
})
const WorkSection = document.getElementById("Portfolio");
projects.forEach((project) => {
  let div = document.createElement("div");
  div.classList.add("project");
  

  let img = document.createElement("img");
  img.classList.add("project_img");
  img.setAttribute("alt", "Project Image");
  img.setAttribute("src", project.image);
  div.appendChild(img);
  let h2_title = document.createElement("h2");
  h2_title.classList.add("project_title");
  h2_title.innerText=project.name;
  div.appendChild(h2_title);
  let list_item_1 = document.createElement("li");
  list_item_1.classList.add("list_items");
  let p = document.createElement("p");
  p.classList.add("list_items_text");
  p.setAttribute("id", "canopy_text");
  p.append(document.createTextNode(project.title));
  list_item_1.appendChild(p);

  let list_item_2 = document.createElement("li");
  list_item_2.classList.add("list_items");
  let list_img = document.createElement("img");
  list_img.setAttribute("src", project.counter);
  list_img.setAttribute("alt", "");
  list_img.classList.add("counter_class");
  list_item_2.appendChild(list_img);

  let list_item_3 = document.createElement("li");
  list_item_3.classList.add("list_items");
  let p2 = document.createElement("p");
  p2.classList.add("list_items_text_other");
  p2.append(document.createTextNode(project.type));
  list_item_3.appendChild(p2);

  let list_item_4 = document.createElement("li");
  list_item_4.classList.add("list_items");
  let list_img2 = document.createElement("img");
  list_img2.setAttribute("src", project.counter);
  list_img2.setAttribute("alt", "");
  list_img2.classList.add("counter_class");
  list_item_4.appendChild(list_img2);

  let list_item_5 = document.createElement("li");
  list_item_5.classList.add("list_items");
  let p3 = document.createElement("p");
  p3.classList.add("list_items_text_other");
  p3.append(document.createTextNode(project.date));
  list_item_5.appendChild(p3);

  let ul = document.createElement("ul");
  ul.classList.add("project_details");
  ul.appendChild(list_item_1);
  ul.appendChild(list_item_2);
  ul.appendChild(list_item_3);
  ul.appendChild(list_item_4);
  ul.appendChild(list_item_5);

  div.appendChild(ul);

  let project_description = document.createElement("p");
  project_description.classList.add("project_description");
  project_description.append(document.createTextNode(project.description));
  div.appendChild(project_description);

  let ul2 = document.createElement("ul");
  ul2.classList.add("technology_used");
  let p_html = document.createElement("p");
  p_html.classList.add("technology_text");
  p_html.append(document.createTextNode(project.tools[2]));

  let p_css = document.createElement("p");
  p_css.classList.add("technology_text");
  p_css.append(document.createTextNode(project.tools[0]));

  let p_js = document.createElement("p");
  p_js.classList.add("technology_text");
  p_js.append(document.createTextNode(project.tools[1]));

  let li_technology_1 = document.createElement("li");
  li_technology_1.classList.add("technology");
  li_technology_1.appendChild(p_html);

  let li_technology_2 = document.createElement("li");
  li_technology_2.classList.add("technology");
  li_technology_2.appendChild(p_css);

  let li_technology_3 = document.createElement("li");
  li_technology_3.classList.add("technology");
  li_technology_3.appendChild(p_js);

  ul2.appendChild(li_technology_1);
  ul2.appendChild(li_technology_2);
  ul2.appendChild(li_technology_3);

  let button = document.createElement("button");
  button.classList.add("project_button");
  button.setAttribute("type", "submit");
  button.setAttribute("onclick", 'openModal('+project.id+')');
  button.append(document.createTextNode("See Project"));

  div.appendChild(ul2);

  div.appendChild(button);

  WorkSection.appendChild(div);
});

document.querySelector(".span_class").addEventListener("click", () => {
  document.querySelector(".menu_item_container").classList.toggle("show");
  document.querySelectorAll(".mobile_background").forEach((section) => {
    section.classList.toggle("blur");
  });
});
document.querySelector(".close_icon").addEventListener("click", () => {
  document.querySelector(".menu_item_container").classList.toggle("show");
  document.querySelectorAll(".mobile_background").forEach((section) => {
    section.classList.toggle("blur");
  });
});

document.querySelectorAll(".navlist-item-mobile").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu_item_container").classList.toggle("show");
    document.querySelectorAll(".mobile_background").forEach((section) => {
      section.classList.toggle("blur");
    });
  });
});
