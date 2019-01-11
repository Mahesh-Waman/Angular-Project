import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import {RouterTestingModule} from '@angular/router/testing'
import { LoginpageComponent } from './loginpage.component';
import { FormsModule } from '@angular/forms'
import { LoginServiceService } from '../login-service.service'
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import {HttpClientModule} from '@angular/common/http'
import {RegistrationComponent} from '../registration/registration.component'
import {HomeComponent} from '../home/home.component';
describe('LoginpageComponent', () => {
  const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginpageComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'Home',component:HomeComponent}
  ];
  
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;
  let SubmitEl: DebugElement;
  let UserEl: DebugElement;
  let PasswordEl: DebugElement;
  let authservice: LoginServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginpageComponent,RegistrationComponent,HomeComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        // RouterModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
      ],
      providers: [LoginServiceService,
        {provide: APP_BASE_HREF, useValue: '/'}]


    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    authservice = TestBed.get(LoginServiceService)
    // fixture.detectChanges();
    
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginpageComponent);
  //   component = fixture.componentInstance;
  //   // fixture.detectChanges();
  //   SubmitEl=fixture.debugElement.query(By.css('button'));
  //   UserEl = fixture.debugElement.query(By.css('input[type=text]'));
  //   PasswordEl = fixture.debugElement.query(By.css('input[type=password]'));
  // });

  it('Entering email and password emits loggedIn event',async( () => {
    let user;
    SubmitEl = fixture.debugElement.query(By.css('button'));
    UserEl = fixture.debugElement.query(By.css('input[name="username"]'));
    PasswordEl = fixture.debugElement.query(By.css('input[type=password]'));
    spyOn(authservice, 'getProduct');
    const onClickMock = spyOn(component,'loginClick');
    // UserEl.nativeElement.value = "MaheshW";
    PasswordEl.nativeElement.value = "12345678";
    const userL=UserEl.nativeElement;
    userL.value="MaheshW";
    userL.dispatchEvent(new Event('input'));
    // SubmitEl.triggerEventHandler('click',null);
    // expect(onClickMock).toHaveBeenCalled();
    console.log(userL.value)
    component.loginClick(userL.value)
    authservice.getProduct('MaheshW');

    // component.loginClick.subscribe((value) => user = value);
    // SubmitEl.nativeElement.click();
    // expect(console.log).toHaveBeenCalledWith('Edit button has been clicked!')

  
    // expect(authservice.getProduct).toHaveBeenCalledWith('MaheshW');
    // SubmitEl.nativeElement.click()
    //  alert(d);
    // fixture.whenStable().then(() => {
    //   expect(component.loginClick).toHaveBeenCalled();
    // authservice.getProduct('MaheshW');

    // });
  }));
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
