import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDasbordComponent } from './mobile-dasbord.component';

describe('MobileDasbordComponent', () => {
  let component: MobileDasbordComponent;
  let fixture: ComponentFixture<MobileDasbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDasbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
