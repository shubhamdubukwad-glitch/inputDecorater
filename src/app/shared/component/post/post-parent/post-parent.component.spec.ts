import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostParentComponent } from './post-parent.component';

describe('PostParentComponent', () => {
  let component: PostParentComponent;
  let fixture: ComponentFixture<PostParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
