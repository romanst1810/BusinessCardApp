import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:33344/api/contacts'; // replace with your API URL

  constructor(private http: HttpClient) { }

  submitContactForm(contact: Contact): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}


/*import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    
  }
  
  saveContact(formData: any) {
    return http.post(`${baseUrl}/contact`, formData)
  .then(response => {
    return response;
  })
  .catch(error => {
    console.error(error);
    return error.message;
  });
  }
}
*/
