({
  baseUrl: './bower_components/',
  name: '../js/main-2',
  out: './js/main-2-built.js',
  paths:{
    'jquery': 'jquery/jquery',
    'jqueryui': 'jquery-ui/ui/jquery-ui',
    'jqueryui-zh': 'jquery-ui/ui/i18n/jquery.ui.datepicker-zh-TW'
  },
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