module.exports = function(config){
  config.set({
     basePath : '../',
     files : [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/js/**/*.js',
        'test/unit/**/*.js'
      ],
      autoWatch : true,
      frameworks: ['jasmine'],
      browsers : ['Chrome'],
      port: 8080,
      plugins : [
              'karma-chrome-launcher',
              'karma-jasmine'
      ]
    });
  };