import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPageComponent } from './erro-page.component';

describe('ErroPageComponent', () => {
  let component: ErroPageComponent;
  let fixture: ComponentFixture<ErroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
