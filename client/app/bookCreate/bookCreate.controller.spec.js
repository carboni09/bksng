'use strict';

describe('Component: BookCreateComponent', function () {

  // load the controller's module
  beforeEach(module('booksnigeriaApp'));

  var BookCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BookCreateComponent = $componentController('BookCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
