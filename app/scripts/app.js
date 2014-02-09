'use strict';

angular.module('foodooApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/recipe_list.html',
                controller: 'RecipeListCtrl'
            })
            .when('/recipe/:slug', {
                templateUrl: 'views/recipe_detail.html',
                controller: 'RecipeDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        });
