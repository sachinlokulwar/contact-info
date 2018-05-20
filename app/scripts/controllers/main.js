'use strict';

/**
 * @ngdoc function
 * @name contactInfoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactInfoApp
 */
angular.module('contactInfoApp')
  .controller('MainCtrl', function ($scope, userFactory, $uibModal) {

  	function getUserDetails(){
      $scope.userDetails = userFactory.getUserDetails();
	}

    $scope.addNewContact = function(){
      $scope.userDetail = {
      	status: 'Active'
      }
      $scope.modalFor = 'create';
      $scope.userModal = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/create-user-modal.html',
        scope: $scope
      });
    }

	$scope.updateContact = function(user){
      $scope.userDetail = user;
      $scope.modalFor = 'update';
      $scope.userModal = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/create-user-modal.html',
        scope: $scope
      });
	}

	$scope.deleteContact = function(user){
      $scope.userDetail = user;
      $scope.userModal = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/delete-user-modal.html',
        scope: $scope
      });
	}

    $scope.cancel = function(){
      $scope.userModal.close();
    }

    $scope.createUser = function(){
      userFactory.addUserDetails($scope.userDetail);
      $scope.userModal.close();
      getUserDetails()
    }

    $scope.deleteUser = function(){
      userFactory.deleteUserDetails($scope.userDetail.id);
      $scope.userModal.close();
      getUserDetails()
    }

    $scope.updateUser = function(){
      userFactory.updateUserDetails($scope.userDetail);
      $scope.userModal.close();
      getUserDetails()
    }
    getUserDetails()
  });
