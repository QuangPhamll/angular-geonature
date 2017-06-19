import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFauneFormulaireComponent } from './contact-faune-formulaire.component';

describe('ContactFauneFormulaireComponent', () => {
  let component: ContactFauneFormulaireComponent;
  let fixture: ComponentFixture<ContactFauneFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFauneFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFauneFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
