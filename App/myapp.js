/**
 * Created by qianlongwang on 8/24/15.
 */
var myapp = angular.module('myapp', ['ui.bootstrap']);
myapp.controller('Ctrl', function($scope){
    $scope.submit = function(){
        $scope.alert = [];
        if($scope.action123 == "+"){
            $scope.result = parseInt($scope.num1) + parseInt($scope.num2);
        }else if($scope.action123 == "-"){
            $scope.result = parseInt($scope.num1) - parseInt($scope.num2);
        }else if($scope.action123 == "*"){
            $scope.result = parseInt($scope.num1) * parseInt($scope.num2);
        }else{
            $scope.result = parseInt($scope.num1) / parseInt($scope.num2);
        }
        if($scope.result > 100){
            $scope.alert.push({type: 'danger', msg: 'Greater than 100!'});
        }
    }
    $scope.action = ["+", "-", "*", "/"];
    //console.log($scope);
    //
    //$scope.alerts = [
    //    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    //    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    //];

    //$scope.addAlert = function() {
    //    $scope.alerts.push({msg: 'Another alert!'});
    //};

    $scope.closeAlert = function(index) {
        $scope.alert.splice(index, 1);
    };
});
