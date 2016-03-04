myApp.controller('EnterHeroController', ['$scope', '$location', 'HeroFactory', function($scope, $location, HeroFactory) {

  $scope.herofactory = HeroFactory;

  $scope.powerTypeSelect;
  $scope.powersAvailable;
  $scope.Invisibility;
  $scope.Fight;
  $scope.SuperSpeed;
  $scope.Heatvision;
  $scope.SuperStrength;
  $scope.Acceleratedhealing;
  $scope.PowerBlast;
  $scope.AnimalAffinity;
  $scope.heroInfo;

  $scope.herofactory.factoryRetrievePowers().then(function() {
    $scope.powerTypeSelect = $scope.herofactory.factoryPowersList();
    $scope.Invisibility = $scope.powerTypeSelect[0].power_name;
    $scope.Fight = $scope.powerTypeSelect[1].power_name;
    $scope.SuperSpeed = $scope.powerTypeSelect[2].power_name;
    $scope.Heatvision = $scope.powerTypeSelect[3].power_name;
    $scope.SuperStrength = $scope.powerTypeSelect[4].power_name;
    $scope.Acceleratedhealing = $scope.powerTypeSelect[5].power_name;
    $scope.PowerBlast = $scope.powerTypeSelect[6].power_name;
    $scope.AnimalAffinity = $scope.powerTypeSelect[7].power_name;

    $scope.powersAvailable = [$scope.Invisibility, $scope.Fight,
      $scope.SuperSpeed, $scope.Heatvision, $scope.SuperStrength,
      $scope.Acceleratedhealing, $scope.PowerBlast, $scope.AnimalAffinity];

    console.log($scope.Invisibility);
  });

  $scope.addHero = function() {
      var hero = {
        alias: $scope.alias,
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        city: $scope.city,
        primary_power: $scope.primary_power
      };

      console.log("hero sent from addPost in enterhero controller", hero);

      $scope.herofactory.factorySaveHero(hero);
      alert('Hero has been added');

      $scope.alias = '';
      $scope.first_name = '';
      $scope.last_name = '';
      $scope.city = '';
      $scope.primary_power = '';

    };

}]);
