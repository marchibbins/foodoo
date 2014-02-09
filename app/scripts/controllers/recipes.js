'use strict';

angular.module('foodooApp')
    .controller('RecipeListCtrl', function ($scope, Recipes) {
        $scope.recipeList = Recipes.query();
    });
