import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichalibroComponent } from './fichalibro.component';

describe('FichalibroComponent', () => {
  let component: FichalibroComponent;
  let fixture: ComponentFixture<FichalibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichalibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichalibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
