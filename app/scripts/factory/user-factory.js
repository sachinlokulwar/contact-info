angular.module('contactInfoApp')
.factory('userFactory', function ($http) {
    var userDetails = [
        {
            id: 1,
            firstName: 'Sachin',
            lastName: 'Lokulwar',
            email: 'sachinlokulwar@gmail.com',
            phone: '9545302725',
            status: 'Active'
        },
        {
            id: 2,
            firstName: 'Sachin1',
            lastName: 'Lokulwar1',
            email: 'sachinlokulwar1@gmail.com',
            phone: '9545302725',
            status: 'Inactive'
        }

    ];
    
    var factory = {};
    factory.getUserDetails = function () {
        return userDetails;
    }
    factory.updateUserDetails = function (newUserDetails) {
    	var i;
    	for(i=0; i<userDetails.length; i++) {
    		if(userDetails[i].id == newUserDetails.id){
    			userDetails[i] = newUserDetails;
    			break;
    		}
    	}
    }
    factory.addUserDetails = function (newUserDetail) {
    	newUserDetail.id = userDetails[userDetails.length - 1].id ? userDetails[userDetails.length - 1].id + 1 : 1; 
        userDetails.push(newUserDetail);
    }
    factory.deleteUserDetails = function (id) {
    	var i;
    	for(i=0; i<userDetails.length; i++) {
    		if(userDetails[i].id == id){
    			break;
    		}
    	}
    	userDetails.splice(i, 1);
    }
    return factory;
});