(function($angular) {

    // Off we go!
    $angular.module('rangeApp', ['ngRangeSlider']).controller('IndexController', function IndexController($scope) {

        /**
         * @property range
         * @type {{from: number, to: number}}
         */
        $scope.range = { from: 0, to: 100 };
        
        /**
         * @property max
         * @type {Number}
         */
        $scope.max = 100;
        
        /**
         * @property colors
         * @type {[string...]}
         */
        $scope.colors = ['#ff0000','#00FF00','#0000FF'];

    });

})(window.angular);