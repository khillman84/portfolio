'use strict'

var allProjects = [];

function Projects(cat) {
  this.name = cat.name;
  this.image = cat.image;
  this.description = cat.description;
  this.date = cat.date;
  this.link = cat.link;
}

Projects.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  return templateRender(this);
};

projectData.forEach(function(ele){
  allProjects.push(new Projects(ele));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
