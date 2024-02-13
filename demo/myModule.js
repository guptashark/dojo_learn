define(
  [
    'dojo/dom'
  ],

  function(dom) {
    const oldText = {};

    const retObj = {
      setText: function(id, text) {
        const node = dom.byId(id);
        oldText[id] = node.innerHTML;
        node.innerHTML = text;
      },

      restoreText: function(id) {
        const node = dom.byId(id);
        node.innerHTML = oldText[id];
        delete oldText[id];
      }
    };

    return retObj;
  }
);

