import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetfinderComponent } from './petfinder.component';

describe('PetfinderComponent', () => {
  let component: PetfinderComponent;
  let fixture: ComponentFixture<PetfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
