myApp.controller('ViewHeroController', ['$scope', '$location', 'HeroFactory', function($scope, $location, HeroFactory) {

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
  $scope.primary_power;
  $scope.heroesArray = [];

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

  $scope.getHero = function() {
    console.log('entered getHero on controller: ', $scope.primary_power);
    $scope.herofactory.factoryGetHeroes($scope.primary_power).then(function() {
      $scope.heroesArray = $scope.herofactory.getSelectedPowerHeroData();
      console.log('returned from factory to controller: ', $scope.heroesArray);
    });
  };

  $scope.deleteHero = function() {
    $scope.herofactory.factoryDeleteHero();
  };

}]);
