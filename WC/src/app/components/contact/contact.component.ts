import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private service: ContactService) { }

    messageForm: FormGroup;

  ngOnInit() {
    this.messageForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      content: ['', Validators.required]
      });
  }
  onSubmit() {
    console.log(this.messageForm.value);
    this.service.postMessage(this.messageForm.value).subscribe(() => {
      this.messageForm.reset();
    });
    }

}
