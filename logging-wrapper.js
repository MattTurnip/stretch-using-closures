var wrapLog = function (callback, name) {
    return function (x, y, z) {
      if (name === "area"){
      console.log(name + " (" +  x + "," + y + ") " + "=> " + callback(x, y, z));
      } else if (name === "volume"){
        console.log(name + " (" +  x + ", " + y + ", " + z + ") " + "=> " + callback(x, y, z));
        }
    };
  };
  
  var area = function (x, y) {
    return x * y;
  };
  var logArea = wrapLog(area, "area");
  
  logArea(5, 3); // expected output area(5, 3) => 15
  logArea(3, 2); // expected output area(3, 2) => 6
  logArea(100, 23);
  
  var volume = function (x, y, z) {
    return x * y * z;
  };
  var logVolume = wrapLog(volume, "volume");
  
  logVolume(5, 3, 2); // expected output volume(5, 3, 2) => 30
  logVolume(3, 2, 4); // expected output volume(3, 2, 4) => 24
  logVolume(234, 1, 45);