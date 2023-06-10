import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  disableButtons: boolean = false;
  
  disableOperations(): void {
    this.disableButtons = true;
  }
  enableOperations(): void {
    this.disableButtons = false;
  }

  sum() {
    this.result = this.num1 + this.num2;
    this.disableOperations();
  }
  subtract() {
    this.result = this.num1 - this.num2;
    this.disableOperations();
  }
  multiply() {
    this.result = this.num1 * this.num2;
    this.disableOperations();
  }

  reset() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
    this.enableOperations();
  }
}


