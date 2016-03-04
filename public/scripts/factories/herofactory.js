myApp.factory('HeroFactory', ['$http', function($http) {

var allPowers;
// var selectedPower;
var selectedPowerHeroData;

  var getPowers = function() {
    console.log("getting powers from getPowers");
    var promise = $http.get('/getpowers').then(function(response) {
      allPowers = response.data;
      console.log("super power objects: ", allPowers);
    });
    return promise;
  };

  var saveHero = function (hero) {
    $http.post('/savehero', hero).then(function(response) {
      console.log(response.data);
    });
  };

  var getSelectedHeroes = function(selectedPower) {
    console.log("inside getSelectedHeroes: ", selectedPower);
    var promise = $http.get('/heroes/' + selectedPower).then(function(response) {
      selectedPowerHeroData = response.data;
      console.log(selectedPowerHeroData);
    });
    return promise;
  };

  var publicFunctions = {
    factoryPowersList: function() {
      return allPowers;
    },
    factoryRetrievePowers: function() {
      return getPowers();
    },
    factorySaveHero: function(hero) {
      return saveHero(hero);
    },
    factoryGetHeroes: function(selectedPower) {
      return getSelectedHeroes(selectedPower);
    },
    getSelectedPowerHeroData: function() {
      return selectedPowerHeroData;
    }
  };

  return publicFunctions;

}]);
