'use strict';

(function(module) {
  const gitController = {};

  gitController.index = () => {
    $('#git').show().siblings().hide();
    repos.requestRepos(repoView.index);
    console.log('git controller index is running');
  };

  module.gitController = gitController;
})(window);
