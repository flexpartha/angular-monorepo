import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerpoolComponent } from './containerpool.component';

describe('ContainerpoolComponent', () => {
  let component: ContainerpoolComponent;
  let fixture: ComponentFixture<ContainerpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerpoolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
