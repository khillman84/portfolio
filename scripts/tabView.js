'use strict'

const tabView = {};

tabView.handleNav = function() {
  $('.navigation').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.navigation .tab:first').click();
};

tabView.initIndexPage = function() {
  Projects.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });
  tabView.handleNav();
};
