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

  $scope.requestRide = function(driverName) {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<label class="item item-input"><input type="text" ng-model="data.address" placeholder="Current Address"></label>',
      title: 'Request a ride',
      subTitle: 'Send a ride request to ' + driverName + '?',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Send</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.address) {
              e.preventDefault();
            } else {
              // TODO - ride request
              console.dir($scope.data);
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
  // $scope.requestRide = function(driverName) {
  //   var confirmPopup = $ionicPopup.confirm({
  //     title: 'Request ride',
  //     template: 'Send a ride request to ' + driverName + '?'
  //   });
  //   confirmPopup.then(function(res) {
  //     if(res) {
  //       // TODO - send ride request
  //     } else {
  //       // Do nothing
  //     }
  //   });
  // };
});
