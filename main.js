
require(
  [
    'dojo/dom',
    'dojo/dom-construct',
    'demo/myModule',
    'demo/domReadyMyModule'
  ], function (dom, domConstruct, myModule, domReadyMyModule) {
    var greetingNode = dom.byId('greeting');
    domConstruct.place('<em>Dojo!</em>', greetingNode);

    myModule.setText('greeting_02', 'Hello Dojo!');
    setTimeout(function () {
        myModule.restoreText('greeting_02');
    }, 3000);

    domReadyMyModule.main();

    // John comment.

    // comment 1.
    // comment 2.
    // comment 3.
  }
);
