'use strict';

angular.module('foodooApp')
    .service('Recipes', function Recipes($resource) {
        return $resource('data/:slug.json', {}, {
            query: {
                method: 'GET',
                params: {
                    slug: 'index'
                },
                isArray: true
            }
        });
    });
