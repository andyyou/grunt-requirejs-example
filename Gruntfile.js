module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    log:{
      options:{
        name: '<%= pkg.name %>'
      },
      bar: 'hello world'
    },
    requirejs:{
      compile: {
        options: {
          baseUrl: './bower_components/',
          name: '../js/main',
          out: './tmp/main.built.js',
          optimize: 'uglify',
          paths:{
            'jquery': 'jquery/jquery',
            'jqueryui': 'jquery-ui/ui/jquery-ui',
            'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
          },
          shim:{
            'jqueryui':{
              deps:['jquery']
            },
            'jqueryui-zh':{
              deps:['jqueryui']
            }
          }
        }
      },
      main2:{
        options: {
          baseUrl: './bower_components/',
          name: '../js/main-2',
          out: './tmp/main-2.built.js',
          optimize: 'uglify',
          paths:{
            'jquery': 'jquery/jquery',
            'jqueryui': 'jquery-ui/ui/jquery-ui',
            'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
          },
          shim:{
            'jqueryui':{
              deps:['jquery']
            },
            'jqueryui-zh':{
              deps:['jqueryui']
            }
          }
        }      
      },
      main1:{
        options: {
          baseUrl: './bower_components/',
          name: '../js/main',
          out: './tmp/main.built.js',
          optimize: 'uglify',
          paths:{
            'jquery': 'jquery/jquery',
            'jqueryui': 'jquery-ui/ui/jquery-ui',
            'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
          },
          shim:{
            'jqueryui':{
              deps:['jquery']
            },
            'jqueryui-zh':{
              deps:['jqueryui']
            }
          }
        }      
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('log', function(){
    var options = this.options({
      name: ''
    });
    // var name = grunt.template.process(options.name);
    grunt.log.writeln("Logging start " + options.name).ok();
  });

  grunt.registerTask('updateConfig', function(config) {
    grunt.config('requirejs.compile.options.baseUrl', config.baseUrl);
    grunt.config('requirejs.compile.options.name', config.name);
    grunt.config('requirejs.compile.options.out', config.out);
    grunt.config('requirejs.compile.options.paths', config.paths);
    grunt.config('requirejs.compile.options.shim', config.shim);
    console.log(grunt.config('requirejs.compile.options'));
  });

  
  grunt.registerTask('update', function(prop, value) {
    grunt.config(prop, value);
  });

  grunt.registerTask('build', function() {
    var configs = [
      // first file
      {
        baseUrl: './bower_components/',
        name: '../js/main', 
        out: './tmp/main.built.js',
        paths:{
          'jquery': 'jquery/jquery',
          'jqueryui': 'jquery-ui/ui/jquery-ui',
          'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
        },
        shim:{
          'jqueryui':{
            deps:['jquery']
          },
          'jqueryui-zh':{
            deps:['jqueryui']
          }
        }
      },
      {
        baseUrl: './bower_components/',
        name: '../js/main-2', 
        out: './tmp/main-2.built.js',
        paths:{
          'jquery': 'jquery/jquery',
          'jqueryui': 'jquery-ui/ui/jquery-ui',
          'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
        },
        shim:{
          'jqueryui':{
            deps:['jquery']
          },
          'jqueryui-zh':{
            deps:['jqueryui']
          }
        }
      }
    ];

    configs.forEach(function(config) {
      grunt.log.writeln("build: " + config.name);
      // 上面這邊有值，但是 pass 到 updateConfig 的時候 config -> null
      grunt.task.run('updateConfig:'+ config);
    });
  });
  
  grunt.registerTask('default', ['requirejs:main1', 'requirejs:main2']);

}