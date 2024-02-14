
var dojoConfig = {
  async: true,
  cacheBust: new Date(),
  waitSeconds: 5,

  packages: [
    {
      name: "demo",
      location: location.pathname.replace(/\/[^/]*$/, '') + '/demo'
    }
  ]
};
