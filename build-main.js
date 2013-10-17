({
  baseUrl: './bower_components/',
  name: '../js/main',
  out: './js/main-built.js',
  paths:{
    'jquery': 'jquery/jquery',
    'jqueryui': 'jquery-ui/ui/jquery-ui',
    'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
  },
  optimize: 'uglify',
  shim:{
    'jqueryui':{
      deps:[
        'jquery'
      ]
    },
    'jqueryui-zh':{
      deps:['jqueryui']
    }
  }
})