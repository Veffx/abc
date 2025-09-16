function requestOrientation() {
    if (typeof(DeviceOrientationEvent) !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission().then(state => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        }
      });
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }
  
    document.querySelector('h1').style.display = "none";
    document.querySelector('#requestOrientationButton').style.display = "none";
  }
  