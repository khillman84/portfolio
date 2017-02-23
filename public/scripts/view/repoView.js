'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $git = $('#git');

    $git.find('ul').empty();
    $git.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    // ui();

    $('#git ul').append(
      repos.with('name').map(render)
    );
    console.log('I am rendered');
  };

  module.repoView = repoView;
})(window);
