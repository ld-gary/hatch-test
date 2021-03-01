import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IapReceiptsComponent } from './iap-receipts.component';

describe('IapReceiptsComponent', () => {
  let component: IapReceiptsComponent;
  let fixture: ComponentFixture<IapReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IapReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IapReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
