import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredcrumpsComponent } from './bredcrumps.component';

describe('BredcrumpsComponent', () => {
  let component: BredcrumpsComponent;
  let fixture: ComponentFixture<BredcrumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BredcrumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BredcrumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
