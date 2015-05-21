/* angularJS implement */
(function(){
 var app = angular.module('indexPage',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "index/templates/home.html",
      controller: 'HomeController'
    })
    .state('resume', {
      url: "/resume",
      templateUrl: "index/templates/resume.html",
      controller: 'ResumeController'
    })
    .state('projects', {
      url: "/projects",
        templateUrl: "index/templates/projects.html",
    	controller: 'ProjectController'
    })
	.state('contact', {
      url: "/contact",
        templateUrl: "index/templates/contact.html",
    	controller: 'ContactController'
    })
    });

//Controllers 
app.controller('HomeController', function($scope){

 });
 
app.controller('ResumeController', function($scope){
	$scope.educations = educations;
	$scope.courses = courses;
	$scope.skills = skills;
	$scope.experiences = experiences;
});

app.controller('ProjectController', function($scope){

});
 



})();