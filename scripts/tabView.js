'use strict'

var tabView = {};

tabView.handleNav = function() {
  $('.navigation').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.navigation .tab:first').click();
};

tabView.handleNav();
