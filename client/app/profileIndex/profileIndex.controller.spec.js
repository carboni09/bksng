'use strict';

describe('Component: ProfileIndexComponent', function () {

  // load the controller's module
  beforeEach(module('booksnigeriaApp'));

  var ProfileIndexComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProfileIndexComponent = $componentController('ProfileIndexComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
