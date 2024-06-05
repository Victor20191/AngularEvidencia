import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumalariosComponent } from './forumalarios.component';

describe('ForumalariosComponent', () => {
  let component: ForumalariosComponent;
  let fixture: ComponentFixture<ForumalariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumalariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
