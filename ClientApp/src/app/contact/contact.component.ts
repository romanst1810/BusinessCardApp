import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [ '', [Validators.required, Validators.pattern('[0-9]*'),], ]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
      this.contactService.submitContactForm(contact).subscribe(response => {
        this.isSubmitted = true;
        console.log('Form submitted successfully');
      }, error => {
        console.log('An error occurred', error);
      });
    }
  }
}
/*export class ContactComponent {
  contact: Contact = new Contact();

  constructor(private contactService: ContactService) { }

  onSubmit() {
    this.contactService.submitContactForm(this.contact).subscribe(response => {
      console.log('Form submitted successfully');
    }, error => {
      console.log('An error occurred', error);
    });
  }
}



/*import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [ '', [Validators.required, Validators.pattern('[0-9]*'),], ]
  });

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  onSubmit() {
    if (this.contactForm.valid) {
     
      this.contactService.saveContact(this.contactForm).toPromise().then(() => {
          
          this.contactForm.reset();
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          this.contactForm.reset();
        });
      }
    }  
}*/
