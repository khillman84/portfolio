'use strict';
(function(module){

  const tabView = {};

  //Initialize the index page and attach the project data to the webpage
  tabView.initIndexPage = function() {
    Projects.all.map(function(a){
      $('#projects').append(a.toHtml());
    });
    // tabView.handleNav();
  };

  module.tabView = tabView;
})(window);
