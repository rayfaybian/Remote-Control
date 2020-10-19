import Battery from './Battery.js';
import Remote from './Remote.js';

let b1 = new Battery(100);
let b2 = new Battery(100);
let remote = new Remote('TV-Remote');
remote.setBattery(b1, b2);

document.getElementById('check').addEventListener('click', () => {
  if (document.getElementById('display').classList.contains('display-on')) {
    remote.getBatteryStatus();
    b1.consumePower();
    b2.consumePower();
  }
});

document.getElementById('on').addEventListener('click', () => {
  /* if (document.getElementById('display').classList.contains('display-on')) {
    remote.getBatteryStatus();
  } */
  remote.turnOn();
  b1.consumePower();
  b2.consumePower();
});

document.getElementById('off').addEventListener('click', () => {
  remote.turnOff();
  b1.consumePower();
  b2.consumePower();
});
