angular.module('comment', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.comments = [];
            $scope.addComment = function() {
                var newcomment = { userName: $scope.userName, body: $scope.messageBody, date: Date.now() };
                $http.post('/sendmessage', newcomment).success(function(data) {
                    $scope.comments.push(data);
                });
                $scope.formContent = '';
            };

            $scope.getDisplayValue = function(currentValue) {
                console.log(currentValue);
                
                var to_return = Date.parse(currentValue);
                
                var dummy =  to_return.toTimeString();
                console.log(dummy);
                return to_return;
            };
            $scope.getAll = function() {
                return $http.get('/getmessages').success(function(data) {
                    angular.copy(data, $scope.comments);
                });
            };
            $scope.getAll();
        }
    ]);
