'use strict';

(function(module){
  const projectController = {};
  projectController.index = () => {
    Projects.getInfo(tabView.initIndexPage);

    $('#projects').show();
    $('#skills').hide();
    $('#about').hide();
  }

  module.projectController = projectController;
})(window);
