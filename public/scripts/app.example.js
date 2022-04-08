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

    this.loadButton.addEventListener('click', async () => {
      let SelectDrive =
        this.selectDrive.options[this.selectDrive.selectedIndex].value;
      let date = this.date.value;
      let time = this.time.options[this.time.selectedIndex].value;
      let orang = this.orang.value;

      this.clear();

      const cars = await Binar.listCars((car) => {
        let result = true;

        let dateTime = date + 'T' + time;
        if (!isNaN(Date.parse(dateTime)) && !isNaN(parseInt(orang))) {
          result =
            car.availableAt.getTime() >= Date.parse(dateTime) &&
            car.capacity === parseInt(orang);
        } else if (!isNaN(Date.parse(dateTime))) {
          result = car.availableAt.getTime() >= Date.parse(dateTime);
        } else if (!isNaN(parseInt(orang))) {
          result = car.capacity === parseInt(orang);
        }

        return result;
      });

      Car.init(cars);
    });
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
