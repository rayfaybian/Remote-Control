export default class Battery {
  constructor(chargelevel = 0) {
    this.chargelevel = chargelevel;
  }
  getChargeLevel() {
    return this.chargelevel;
  }

  consumePower(chargelevel) {
    /* this.chargelevel = chargelevel - 1; */
    this.chargelevel -= 0.5;
  }
}
