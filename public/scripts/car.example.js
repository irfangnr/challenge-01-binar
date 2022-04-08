class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card" style="width: 20rem;margin-left:20px;">
    <img src="${this.image}" alt="${this.manufacture}" class="card-img-top" style="height: 200px;
    object-fit: cover;" />
    <div class="card-body">
      <p clas="item-name"><b>Nama / Tipe Mobil</b></p>
      <p class="price">Rp. ${this.rentPerDay} / hari</p>
      <p class="description">${this.description}</p>
      <div class="capacity-item">
        <p class="capacity">${this.capacity} orang</p>
      </div>
      <div class="capacity-item">
        <p class="tranmision">${this.transmission}</p>
      </div>
      <div class="capacity-item">
        <p class="year">${this.year}</p>
      </div>
      <a href="#" class="btn btn-g-green">Sewa</a>
    </div>
  </div>
    `;
  }
}
