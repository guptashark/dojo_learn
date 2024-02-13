
var dojoConfig = {
  async: true,
  packages: [
    // D comment.
    {
      name: "demo",
      location: location.pathname.replace(/\/[^/]*$/, '') + '/demo'
    }
  ]
};
