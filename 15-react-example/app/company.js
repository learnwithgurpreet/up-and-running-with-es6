class Company {
  constructor(name, domain) {
    this.name = name;
    this.domain = domain;
  };

  fetch() {
    console.log(`Hi! I am ${this.name} and I am core domain is ${this.domain}.`);
  };
}

export default Company;