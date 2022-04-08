class App {
  constructor() {
    // this.clearButton = document.getElementById('clear-btn');
    this.loadButton = document.getElementById('btn-car');
    this.carContainerElement = document.getElementById('cars-container');
    // ambil data input
    this.selectDrive = document.getElementById('selectDrive');
    this.date = document.getElementById('tanggal');
    this.time = document.getElementById('selectWaktu');
    this.orang = document.getElementById('orang');
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.loadd.onclick = this.driver;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement('div');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
