'use strict';

angular.module('foodooApp')
    .controller('RecipeListCtrl', function ($scope, Recipes) {
        $scope.recipe_list = Recipes.query();
    });
