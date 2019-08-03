import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEleveComponent } from './nouveau-eleve.component';

describe('NouveauEleveComponent', () => {
  let component: NouveauEleveComponent;
  let fixture: ComponentFixture<NouveauEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
