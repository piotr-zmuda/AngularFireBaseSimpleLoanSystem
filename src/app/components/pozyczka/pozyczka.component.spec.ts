import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozyczkaComponent } from './pozyczka.component';

describe('PozyczkaComponent', () => {
  let component: PozyczkaComponent;
  let fixture: ComponentFixture<PozyczkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PozyczkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PozyczkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
