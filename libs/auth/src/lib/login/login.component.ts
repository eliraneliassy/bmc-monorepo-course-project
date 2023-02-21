import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bmc-b-course-project-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder, private router: Router) {
    
    

    this.form = this.fb.group(
      {
        name: this.fb.control(null),
        password: this.fb.control(null)
      }
    )
  }

  submit(){
    console.log(this.form);
    this.router.navigateByUrl('/feed');
  }
}
