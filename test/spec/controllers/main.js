'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('contactInfoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('It should have 2 users present allready', function () {
    expect(scope.userDetails.length).toBe(2);
  });
  it('Add new contact and check length', function () {
    scope.userDetail = {
      firstName: 'test',
      lastName: 'test1',
      mobile: '9876543212',
      email: 'test@test.com',
      status: 'Active'
    }
    scope.createUser();
    expect(scope.userDetails.length).toBe(3);
  });
  it('Add contact and then Update contact and check', function () {
    scope.userDetail = {
      firstName: 'test',
      lastName: 'test1',
      mobile: '9876543212',
      email: 'test@test.com',
      status: 'Active'
    }
    scope.createUser();
    expect(scope.userDetails.length).toBe(3);
    scope.userDetail = {
      id: 3,
      firstName: 'test12345',
      lastName: 'test1',
      mobile: '9876543212',
      email: 'test@test.com',
      status: 'Active'
    }
    scope.updateUser();
    expect(scope.userDetails[scope.userDetails.length - 1].firstName).toBe('test12345');
  });
  it('Add contact and then Delete contact', function () {
    scope.userDetail = {
      firstName: 'test',
      lastName: 'test1',
      mobile: '9876543212',
      email: 'test@test.com',
      status: 'Active'
    }
    scope.createUser();
    expect(scope.userDetails.length).toBe(3);
    scope.userDetail = {
      id: 3,
    }
    scope.deleteUser();
    expect(scope.userDetails.length).toBe(2);
  });
});
