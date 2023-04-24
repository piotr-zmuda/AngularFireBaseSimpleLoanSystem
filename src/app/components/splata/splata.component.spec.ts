import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplataComponent } from './splata.component';

describe('SplataComponent', () => {
  let component: SplataComponent;
  let fixture: ComponentFixture<SplataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
