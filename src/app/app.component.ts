import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  /*styles: [`
  h3{
    color: dodgerblue;
  }`]*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    console.log(this.log);
  }
}
