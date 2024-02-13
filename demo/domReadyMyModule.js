define([
    'dojo/dom',
    'dojo/domReady!'
], function(dom) {
  
  const module_obj = {
    main: function() {
      var greeting = dom.byId('greeting');
      greeting.innerHTML += '<strong> from Dojo!</strong>';
    }
  };

  return module_obj;
});
