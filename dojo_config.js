
var dojoConfig = {
  // C comment.
  async: true,
  cacheBust: new Date(),
  waitSeconds: 5,

  packages: [
    // D comment.
    {
      name: "demo",
      location: location.pathname.replace(/\/[^/]*$/, '') + '/demo'
    }
  ]
  // B comment.
};

// A comment.
