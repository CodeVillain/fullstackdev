class Singleton {
  constructor() {
    if (!this.constructor.instance) {
      this.constructor.instance = this;
    }

    this.time = new Date();
    return this.constructor.instance;
  }
}

const singleton = new Singleton();
console.log(singleton.time);

setTimeout(() => {
  const singleton2 = new Singleton();
  console.log(singleton2.time);
}, 4000);