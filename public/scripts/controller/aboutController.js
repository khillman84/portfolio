'use strict';

(function(module){
  const aboutController = {};
  aboutController.index = () => {
    $('#about').show();
    $('#skills').hide();
    $('#projects').hide();
  }

  module.aboutController = aboutController;
})(window);
