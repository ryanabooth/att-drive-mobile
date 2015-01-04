angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $timeout, $ionicPopup) {
  $scope.user = {
    name: 'Germane Howitz',
    rating: 75
  };

  // TODO - possibly request this list
  $scope.contacts = [
    {
      name: 'Max Payne',
      phoneNumber: '1234567890',
      rating: 78
    },
    {
      name: 'Groutz Herman',
      phoneNumber: '1234567890',
      rating: 97
    },
    {
      name: 'Johanne Serbian',
      phoneNumber: '1234567890',
      rating: 50
    }
  ];

  $scope.showPopup = function() {
    $scope.data = {rating: '??'};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<label class="item item-input"><input type="text" ng-model="data.name" placeholder="Name"></label>'+
                '<br/>'+
                '<label class="item item-input"><input type="text" ng-model="data.phoneNumber" placeholder="Phone Number"></label>',
      title: 'Add a Friend',
      subTitle: 'Add a new driver to your list',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.name || !$scope.data.phoneNumber) {
              e.preventDefault();
            } else {
              $scope.contacts.push($scope.data);
            }
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Added: ', res);
    });
  };

  // A confirm dialog
  $scope.requestRide = function(driverName) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Request ride',
      template: 'Send a ride request to ' + driverName + '?'
    });
    confirmPopup.then(function(res) {
      if(res) {
        // TODO - send ride request
      } else {
        // Do nothing
      }
    });
  };
});
