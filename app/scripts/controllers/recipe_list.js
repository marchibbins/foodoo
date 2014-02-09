'use strict';

angular.module('foodooApp')
    .controller('RecipeListCtrl', function ($scope) {
        $scope.recipe_list = [
            {
                name: 'Stir fry',
                ingredients_list: [
                    'kale',
                    'pepper',
                    'garlic',
                    'beans',
                    'rice'
                ]
            },
            {
                name: 'Chili',
                ingredients_list: [
                    'tomatoes',
                    'greens',
                    'beans',
                    'chili powder',
                    'rice'
                ]
            },
            {
                name: 'Soup',
                ingredients_list: [
                    'avocado',
                    'pepper',
                    'hemp milk',
                    'oregano'
                ]
            }
        ]
    });
