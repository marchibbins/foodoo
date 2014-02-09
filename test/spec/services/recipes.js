'use strict';

describe('Service: Recipes', function () {

    // load the service's module
    beforeEach(module('foodooApp'));

    // instantiate service
    var Recipes;
    beforeEach(inject(function (_Recipes_) {
        Recipes = _Recipes_;
    }));

    it('should do something', function () {
        expect(!!Recipes).toBe(true);
    });

});
