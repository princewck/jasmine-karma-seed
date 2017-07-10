angular.module('app', [])
  .filter('reverse', function () {
    return function (str) {
      return str.split('').reverse().join('');
    }
  });