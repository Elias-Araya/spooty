import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarAlbumComponent } from './guardar-album.component';

describe('GuardarAlbumComponent', () => {
  let component: GuardarAlbumComponent;
  let fixture: ComponentFixture<GuardarAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarAlbumComponent]
    });
    fixture = TestBed.createComponent(GuardarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
