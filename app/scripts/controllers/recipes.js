'use strict';

angular.module('foodooApp')
    .controller('RecipeListCtrl', function ($scope, Recipes) {
        $scope.recipeList = Recipes.query();
    })
    .controller('RecipeDetailCtrl', function ($scope, $routeParams, Recipes) {
        $scope.recipe = Recipes.get({
            slug: $routeParams.slug
        });
    });
