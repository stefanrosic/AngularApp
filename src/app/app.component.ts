import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Translator tool';
  name:string= '';

  constructor(private httpClient:HttpClient){  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
  }

  ev(){
    var timer;
    var timeout = 3000;
    var get = this.httpClient;
      clearTimeout(timer);
        if ($('#input_word_to_translate').val) {
            timer = setTimeout(function(){
              get.get('https://localhost:44306/api/get')
              .subscribe(
                (data:any[]) => {
                    console.log('DATA: ' + data);
                }
              )
            }, timeout);
        }
  }
    
  getProfile(){
    console.log('fffffffffffffff')

  }
}
