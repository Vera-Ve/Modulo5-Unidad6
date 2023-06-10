import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all initial values of zero', () => {
    const component = new CalculatorComponent;
    expect(component.num1)
    .withContext('Initial value')
    .toBe(0);
    expect(component.num2)
    .withContext('Initial value').toBe(0);
    expect(component.result)
    .withContext('Initial value').toBe(0);
    const num1Input = fixture.nativeElement.querySelector('#num1');
    const num2Input = fixture.nativeElement.querySelector('#num2');
    const resultText = fixture.nativeElement.querySelector('p');

    expect(num1Input.value)
    .withContext('Initial value')
    .toBe('0');
    expect(num2Input.value)
    .withContext('Initial value')
    .toBe('0');
    expect(resultText.textContent)
    .withContext('Initial value')
    .toContain('0');

  })
});
