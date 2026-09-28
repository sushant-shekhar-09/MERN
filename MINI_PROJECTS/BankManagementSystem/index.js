class BankAccount {
  #balance;

  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
      return;
    }

    this.#balance = this.#balance + amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return;
    }

    this.#balance = this.#balance - amount;
  }

  getAccountType() {
    console.log("This is a Bank Account");
  }
}

class SavingBankAccount extends BankAccount {
  constructor(accountHolderName, balance, interestRate) {
    super(accountHolderName, balance);
    this.interestRate = interestRate;
  }

  getAccountType() {
    console.log("This is a Saving Bank Account");
  }
}

// Bank Account
let sushantSBI = new BankAccount("Sushant", 5000);

console.log(sushantSBI.accountHolderName);
console.log(sushantSBI.getBalance());

sushantSBI.deposit(2000);

console.log(sushantSBI.getBalance());

sushantSBI.withdraw(1000);

console.log(sushantSBI.getBalance());

sushantSBI.getAccountType();

// Saving Bank Account
let shekharSBI = new SavingBankAccount("Shekhar", 12000, 8);

console.log(shekharSBI.accountHolderName);
console.log(shekharSBI.getBalance());
console.log(shekharSBI.interestRate);

shekharSBI.deposit(1000);

console.log(shekharSBI.getBalance());

shekharSBI.getAccountType();


