'use strict';

(function(module){
  const homeController = {};
  homeController.index = () => {
    $('#skills').show();
    $('#about').hide();
    $('#projects').hide();
  }

  module.homeController = homeController;
})(window);
