
var dojoConfig = {
  async: true,
  cacheBust: new Date(),
  waitSeconds: 5,
  baseUrl: '.',

  packages: [
    'dojo',
    'dijit',
    'dojox',
    {
      name: "demo",
      location: location.pathname.replace(/\/[^/]*$/, '') + '/demo'
    }
  ]
};
