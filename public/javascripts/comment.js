angular.module('messenger', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.messages = [];
            $scope.addComment = function() {
                var d = new Date();
                var n = d.toTimeString();
                var new_time = n.substring(0, 8);
                var newcomment = { userName: $scope.userName, body: $scope.messageBody, date: new_time };
                $http.post('/sendmessage', newcomment).success(function(data) {
                    $scope.messages.push(data);
                });
                $scope.formContent = '';
            };
            $scope.getAll = function() {
                return $http.get('/getmessages').success(function(data) {
                    angular.copy(data, $scope.messages);
                });
            };

            (function() {
               $scope.getAll();
                setTimeout(arguments.callee, 250);
            })();
        }
    ]);
