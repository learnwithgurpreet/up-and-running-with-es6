import Company from './company';

class Employee extends Company {
  constructor(name, domain) {
    super(name, domain);
  }

  /* 
    You can override parent class functions declaring them again with the same names.
  fetch() {
    console.log(`Hi!, I just got overridden by Employee class fetch method by ${this.name} from ${this.domain} domain.`);
  } */
};

let gs = new Employee('Gurpreet Singh', 'XT');
gs.fetch();