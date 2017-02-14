'use strict'

function Projects(cat) {
  this.name = cat.name;
  this.image = cat.image;
  this.description = cat.description;
  this.date = cat.date;
  this.link = cat.link;
}

Projects.all = [];

Projects.prototype.toHtml = function() {
  let templateRender = Handlebars.compile($('#project-template').text());

  return templateRender(this);
};

Projects.loadInfo = function(projectData) {
  projectData.forEach(function(ele) {
    Projects.all.push(new Projects(ele));
  });
}

Projects.getInfo = function() {
  if (localStorage.projectData) {
    console.log('fetched data from local storage');
    Projects.loadInfo(JSON.parse(localStorage.getItem('projectData')));
    tabView.initIndexPage();
  } else {
    console.log('storing data from JSON');
    $.getJSON('../data/data.json')
    .then(function(data){
      localStorage.setItem('projectData', JSON.stringify(data));
      Projects.loadInfo(data);
      tabView.initIndexPage();
    });
  }
}
