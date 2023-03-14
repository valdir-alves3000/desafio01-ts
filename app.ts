import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SimulateAccount } from "./class/SimulateAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Valdir", 10);
console.log(
  `${peopleAccount.getName()} você depositou ${peopleAccount.deposit(
    60
  )} e está com ${peopleAccount.getBalance()} de saldo.`
);

peopleAccount.withdraw(30);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(2000);
companyAccount.getLoan(3250);
console.log(companyAccount.getBalance());
console.log(companyAccount);

const simulateAccount: SimulateAccount = new SimulateAccount("TYPESCRIPT", 30);
simulateAccount.deposit(60);
simulateAccount.withdraw(33);

console.log(simulateAccount.getAccountNumber());
console.log(simulateAccount);
