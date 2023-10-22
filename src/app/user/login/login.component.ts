import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiServicesService) { }
  onSubmit(): void {
    this.apiService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
      },
      (error) => {

        console.error('Login error', error);
      }
    );
  }

}
