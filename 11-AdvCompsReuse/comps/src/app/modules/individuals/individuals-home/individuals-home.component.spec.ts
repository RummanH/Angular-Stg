import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsHomeComponent } from './individuals-home.component';

describe('IndividualsHomeComponent', () => {
  let component: IndividualsHomeComponent;
  let fixture: ComponentFixture<IndividualsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
