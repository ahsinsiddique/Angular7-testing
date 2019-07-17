import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedService } from './shared.service';
/*
@description
HttpClientTestingModule Extended interactions between a
services and  make testing scenarios more manageable
*/
describe('Shared service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService],
      imports: [HttpClientTestingModule]
    });
  });
    describe(':', () => {

      function setup() {
        const sharedService = TestBed.get(SharedService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { sharedService, httpTestingController };
      }

      it('should call the google\'s map data', () => {
        const { sharedService, httpTestingController } = setup();
        const mockGoogleMapData = {id: 1, country : 'Islamabad', zipcode: '46000'};
        sharedService.getGoogleMapData().subscribe(data => {
          expect(data.mapData).toEqual(mockGoogleMapData);
        });

        const req = httpTestingController.expectOne('https:www.google.com/googleMapData');

        expect(req.request.method).toBe('GET');

        req.flush({
          mapData: mockGoogleMapData
        });
      });

      afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });
    });
});