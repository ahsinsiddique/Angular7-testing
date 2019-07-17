import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have two users`, async(() => {
    expect(component.users.length).toEqual(2);
}));

it(`html should render atleast one user`, async(() => {
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('Ahsan');
}));

it(`should render @input`, async(() => {
  const app = fixture.debugElement.componentInstance;
  app.text = 'test quote';
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('q').innerText).toEqual('test quote');
}));
});
