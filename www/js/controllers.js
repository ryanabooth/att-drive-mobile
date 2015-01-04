angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $timeout, $ionicPopup, $http) {
  $scope.user = {
    name: 'Germane Howitz',
    rating: 92
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
      rating: 85
    },
    {
      name: 'Johanne Serbian',
      phoneNumber: '1234567890',
      rating: 50
    }
  ];

  $scope.requestRide = function(driverName) {
    $scope.data = {address: '5757 Wayne Newton Boulevard, Las Vegas, NV 89119'};

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
              var post = {
                user: 'Ryan Booth',
                address: $scope.data.address
              };
              $http.post('http://24bf3ec1.ngrok.com/api/pickups', {payload: post})
              .then(function() {
                $scope.status = 'Request Pending';
              }, function(error) {
                console.error(error);
              });
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
