
require(
  [
    'dojo/dom',
    'dojo/dom-construct',
    'demo/myModule'
  ], function (dom, domConstruct, myModule) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em>Dojo!</em>', greetingNode);

    myModule.setText('greeting_02', 'Hello Dojo!');
    setTimeout(function () {
        myModule.restoreText('greeting_02');
    }, 3000);
  }
);
