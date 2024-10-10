import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloaderComponent } from './dowloader.component';

describe('DowloaderComponent', () => {
  let component: DowloaderComponent;
  let fixture: ComponentFixture<DowloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
