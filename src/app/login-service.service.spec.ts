import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {HttpClientModule} from '@angular/common/http'
import { LoginServiceService } from './login-service.service';
import { post } from 'selenium-webdriver/http';
// import {HttpClient} from '@angular/common/http'
describe('LoginServiceService', () => {
  let service:LoginServiceService;
  let httpMock:HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({
    imports:[HttpClientTestingModule,HttpClientModule],
    providers:[LoginServiceService]
  });
  service=TestBed.get(LoginServiceService);
  httpMock=TestBed.get(HttpTestingController)
});
afterEach(()=>{
  httpMock.verify();
})

  // it('should be created', () => {
  //   const service: LoginServiceService = TestBed.get(LoginServiceService);
  //   expect(service).toBeTruthy();
  // });
  it('should retrive data from GET api',()=>{
    const dummyPost=[
      {"id": 1,"Name": "Mahesh Waman","userName": "MaheshW","emailId": "mahesh.waman@neosofttech.com","password": "12345678"},
      // {"Name": "mahesh","userName": "m","emailId": "m@gmail.com","password": "1234","id": 3}
    ]
    service.getProduct("MaheshW").subscribe(response=>{
      expect(response.length).toBe(1);
      expect (response).toEqual(dummyPost);
    });
    const request=httpMock.expectOne(`${service._productURL}?q=MaheshW`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPost);
  })
});
