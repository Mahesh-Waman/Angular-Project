import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {RegistrationComponent } from './registration/registration.component'
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
describe('AppComponent', () => {
  const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginpageComponent},
    {path:'aa',component:RegistrationComponent}
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        LoginpageComponent,
        RegistrationComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'login'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('login');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to login!');
  // });
});
