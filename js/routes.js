angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.chatMate', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/chatMate.html',
        controller: 'chatMateCtrl'
      }
    }
  })

  .state('notifications', {
    url: '/page13',
    templateUrl: 'templates/notifications.html',
    controller: 'notificationsCtrl'
  })

  .state('tabsController.chatMate2', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/chatMate2.html',
        controller: 'chatMate2Ctrl'
      }
    }
  })

  .state('tabsController.chatMate3', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/chatMate3.html',
        controller: 'chatMate3Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('homePage', {
    url: '/page5',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('loginWithUs', {
    url: '/page6',
    templateUrl: 'templates/loginWithUs.html',
    controller: 'loginWithUsCtrl'
  })

  .state('createANewAccount', {
    url: '/page7',
    templateUrl: 'templates/createANewAccount.html',
    controller: 'createANewAccountCtrl'
  })

  .state('editProfile', {
    url: '/page12',
    templateUrl: 'templates/editProfile.html',
    controller: 'editProfileCtrl'
  })

  .state('forgotPassword', {
    url: '/page8',
    templateUrl: 'templates/forgotPassword.html',
    controller: 'forgotPasswordCtrl'
  })

  .state('changePassword', {
    url: '/page10',
    templateUrl: 'templates/changePassword.html',
    controller: 'changePasswordCtrl'
  })

  .state('sendFeedback', {
    url: '/page14',
    templateUrl: 'templates/sendFeedback.html',
    controller: 'sendFeedbackCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')

  

});