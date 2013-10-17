requirejs.config({
  baseUrl: './bower_components/',
  urlArgs: 'bust=' + (new Date()).getTime(),
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
});

requirejs(['jquery', 'jqueryui', 'jqueryui-zh'],
  function(){
    $(function(){
      $('h1').css('color','#f00');
      $('#date').datepicker({
        changeMonth: true
      });
    })
});