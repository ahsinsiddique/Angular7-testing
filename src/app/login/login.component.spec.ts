import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By ,BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder,FormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder.group({
      name: null,
      password: null
  });
    fixture.detectChanges();
  });

  it('Login should be created', () => {
        expect(component).toBeTruthy();
    });
  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

 it(`form should be invalid`, async(() => {
    component.loginForm.controls['password'].setValue('');
    component.loginForm.controls['name'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.loginForm.controls['password'].setValue('asdf123456');
    component.loginForm.controls['name'].setValue('Ahsan SAdd');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  

});
