function handleOrientation(event) {
    let alpha = event.alpha; // 0 - 360
    document.querySelector('#circle').style.transform = "rotate(" + alpha + "deg)";
  
    // 英文方向
    let direction = "N";
    if (alpha >= 22.5 && alpha < 67.5) direction = "NE";
    else if (alpha >= 67.5 && alpha < 112.5) direction = "E";
    else if (alpha >= 112.5 && alpha < 157.5) direction = "SE";
    else if (alpha >= 157.5 && alpha < 202.5) direction = "S";
    else if (alpha >= 202.5 && alpha < 247.5) direction = "SW";
    else if (alpha >= 247.5 && alpha < 292.5) direction = "W";
    else if (alpha >= 292.5 && alpha < 337.5) direction = "NW";
  
    document.querySelector('#direction').innerText = "Direction: " + direction;
  }
  