import { Component,ElementRef,OnInit } from '@angular/core';
import {RamlService}  from   './raml.service';

@Component({
  selector: 'my-app',
  template: `<h1>Bootstrap Styled Browse Button</h1>
<h4>styled file browse button for bootstrap v3.5+</h4>
<div class="container">

  <div class="form-group">
    <input type="file" (change)="fileEvent($event)" id="selectFile"name="selectFile" class="file">
    <div class="input-group col-xs-12">
      <span class="input-group-addon"><i class="glyphicon glyphicon-picture"></i></span>
    <input type="text" class="form-control input-lg" disabled [(ngModel)]="username">
      <span class="input-group-btn">
        <button class="browse btn btn-primary input-lg" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>

    </div>

    <input type="button" class="btn btn-primary clearmarg" (click)="uploadimage()" value="Upload Image">

  </div>

</div>
`,
providers: [ RamlService ]
})



export class AppComponent implements OnInit {

ngOnInit(): void {
  }


  public fileExtension: any;
public title:String ="Angular File Upload";
username: string ="Upload Image";
constructor(private elem : ElementRef , private ramlservice: RamlService){

}

public uploadimage():void {

let files = this.elem.nativeElement.querySelector('#selectFile').files;
console.log(files[0].name);
this.username = files[0].name;

this.ramlservice.getRamlData().subscribe(data =>{


console.log(data.json());
}.error => {

console.log("error");
});

setTimeout(() =>{ this.clearfilename(); }, 3000);



}

public fileEvent(event) : void {

var file = event.target.files[0];
this.fileExtension = file.name.split('.').pop();
console.log(this.fileExtension);
}
public clearfilename() :void {

this.username = "Upload Image";
}

name = 'Angular'; }
