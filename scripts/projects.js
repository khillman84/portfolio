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
  var $newProject = $('summary.template').clone().removeClass('template');

  $newProject.find('address').text('this.name');
  $newProject.find('img').attr('src', this.image);
  $newProject.find('.project-description').text('cat.description');
  $newProject.find('time').text('cat.date');
  $newProject.find('.projects a').attr('href', this.link);
  return $newProject;
};

projectData.forEach(function(ele){
  allProjects.push(new Projects(ele));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
