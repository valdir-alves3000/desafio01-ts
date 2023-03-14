import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): string | undefined => {
    if (this.validateStatus()) {
      this.setBalance(value);
      return `Pegou um empréstimo de: ${value}`;
    }
  };
}
