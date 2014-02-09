'use strict';

describe('Controller: RecipeListCtrl', function () {

    // load the controller's module
    beforeEach(module('foodooApp'));

    var RecipeListCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        RecipeListCtrl = $controller('RecipeListCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of recipes to the scope', function () {
        expect(scope.recipe_list.length).toBeGreaterThan(0);
    });
});
