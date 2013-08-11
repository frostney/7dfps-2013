(function(scene) {
  
  
  var done = scene.async();

  console.log(scene.isAsync);
  scene.events = {
    '#btnSwitch': {
      'click': function(event) {
        event.data.scene.parent.show('scene2');
      }
    }
  };

  scene.expose({
    btnSwitchToNextScene: "Switch to next scene",
    test: "Hallo",
    title: scene.name
  });
  
  //aaahhhhhh;
  
  done();

})(this);
