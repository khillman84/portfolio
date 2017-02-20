(function(module){
  'use strict'
  const tabView = {};

  //Show or hide content based on what nav bar item is clicked
  tabView.handleNav = () => {
    $('.navigation').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.navigation .tab:first').click();
  };

  //Initialize the index page and attach the project data to the webpage
  tabView.initIndexPage = () => {
    Projects.all.map(function(a){
      $('#projects').append(a.toHtml())
    });
    tabView.handleNav();
  };

  module.tabView = tabView;
})(window);
