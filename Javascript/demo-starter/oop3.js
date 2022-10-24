export class BaseLogger {
  getTimeNow() {
    return new Date().toISOString();
  }
  log(title, data) {
    //x loggerType
    throw new Error("log methodu implemente edilmeli.");
    // switch (loggerType) {
    //   case "sms":
    //     //
    //     //
    //     //
    //     console.log(`${this.getTimeNow()} Sms Logger:`, title, data);
    //     //
    //     //
    //     //
    //     break;
    //   case "email":
    //     //
    //     //
    //     ////
    //     //
    //     //
    //     console.log(`${this.getTimeNow()} Email Logger:`, title, data);
    //     ///
    //     //
    //     ////
    //     //
    //     //
    //     break;
    //   case "database":
    //     //
    //     //
    //     ////
    //     //
    //     ////
    //     //
    //     //
    //     console.log(`${this.getTimeNow()} Database Logger:`, title, data);
    //     //
    //     //
    //     ////
    //     //
    //     ////
    //     //
    //     ////
    //     //
    //     //
    //     break;
    //   default:
    //     ////
    //     //
    //     ////
    //     //
    //     //
    //     console.log(`${this.getTimeNow()} File Logger:`, title, data);
    //     ////
    //     //
    //     ////
    //     //
    //     ////
    //     //
    //     //
    //     break;
    // }
  }
}

export class FileLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} File Logger:`, title, data);
  }
}

export class SmsLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} Sms Logger:`, title, data);
  }
}

export class EmailLogger extends BaseLogger {
  log(title, data) {
    console.log(`${this.getTimeNow()} Email Logger:`, title, data);
  }
}
