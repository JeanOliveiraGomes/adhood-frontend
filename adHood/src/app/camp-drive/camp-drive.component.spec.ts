import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampDriveComponent } from './camp-drive.component';

describe('CampDriveComponent', () => {
  let component: CampDriveComponent;
  let fixture: ComponentFixture<CampDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
