'use strict';
(function(module){

  function Projects(cat) {
    this.name = cat.name;
    this.image = cat.image;
    this.description = cat.description;
    this.date = cat.date;
    this.link = cat.link;
  }

  Projects.all = [];

  //Use Handlebars to compile the project information into the html template
  Projects.prototype.toHtml = function() {
    let templateRender = Handlebars.compile($('#project-template').text());
    return templateRender(this);
  };

  //Takes the project data and makes them new Project objects that are stored in Projects.all
  Projects.loadInfo = function(projectData) {
    Projects.all = projectData.map(function(ele){
      return new Projects(ele);
    });
  };

  //Check to see if JSON file has been loaded in local storage.  If not, then retrieve it and store it.
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

  module.Projects = Projects;
})(window);
