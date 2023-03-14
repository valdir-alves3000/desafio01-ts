import { DioAccount } from "./DioAccount";

export class SimulateAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): number | undefined => {
    if (this.validateStatus()) {
      this.setBalance(value + 10);
      return value;
    }
  };
}
