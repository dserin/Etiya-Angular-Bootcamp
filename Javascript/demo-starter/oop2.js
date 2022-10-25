import { BaseLogger, EmailLogger, FileLogger, SmsLogger } from "./oop3.js";

import House from "./oop.js";

console.log("------------------");

class HouseService {
  constructor(logger) {
    //x loggerType
    this.houses = [];
    this.logger = logger;
    // this.loggerType = loggerType;
  }

  list(filterCb) {
    // callback
    console.log(
      filterCb !== undefined ? this.houses.filter(filterCb) : this.houses
    ); // ternary operator
    // false, 0, null, undefined, NaN, ""
    // Boolean()
  }

  add(house) {
    this.houses.push(house);
    this.logger.log("Yeni bir ev eklendi.", house); //x , this.loggerType
  }
}

// konfigürasyon
const logger = new SmsLogger(); // PnP, plug and play mimarisi
//
//x , "email"
const newHouse = new House(3, 2, "Kuzey", 100, 5000);
houseService.add(newHouse);
