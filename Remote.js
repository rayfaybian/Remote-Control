import Battery from './Battery.js';

export default class Remote {
  constructor(name) {
    this.name = name;
  }

  setBattery(battery1, battery2) {
    this.battery1 = battery1;
    this.battery2 = battery2;
  }

  getBatteryStatus() {
    let bat1 = this.battery1.getChargeLevel();
    let bat2 = this.battery2.getChargeLevel();

    let chargeLevel = (bat1 + bat2) / 2;

    console.log('Current charging level: ' + chargeLevel + '%');
    document.getElementById('display').innerText =
      'Battery\nStatus:\n' + chargeLevel + '%';
  }

  turnOn() {
    document.getElementById('display').classList.add('display-on');

    if (document.getElementById('display').innerText === '') {
      setTimeout(function () {
        document.getElementById('display').innerText = 'Hello';
      }, 1000);
      setTimeout(function () {
        document.getElementById('display').innerText = 'My Remote';
      }, 2000);
    } else {
      document.getElementById('display').innerText = 'My Remote';
    }
    console.log('turning on');
  }

  turnOff() {
    if (document.getElementById('display').classList.contains('display-on')) {
      document.getElementById('display').innerHTML = 'Bye';
      setTimeout(function () {
        document.getElementById('display').innerText = '';
        document.getElementById('display').classList.remove('display-on');
      }, 1000);
    }

    console.log('turning off');
  }
}
