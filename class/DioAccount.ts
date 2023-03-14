export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (value: number): number | undefined => {
    if (this.validateStatus()) {
      this.setBalance(value);
      return value;
    }
  };

  withdraw = (value: number): string => {
    if (this.getBalance() < value) {
      throw new Error("Saldo insuficiente!");
    }

    this.setBalance(-value);
    return `Você sacou: ${value}`;
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (value: number): void => {
    this.balance += value;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
