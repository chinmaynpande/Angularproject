import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Bootstrap Styled Browse Button</h1>
<h4>styled file browse button for bootstrap v3.5+</h4>
<div class="container">

  <div class="form-group">
    <input type="file" id="selectFile"name="selectFile" class="file">
    <div class="input-group col-xs-12">
      <span class="input-group-addon"><i class="glyphicon glyphicon-picture"></i></span>
      <input type="text" class="form-control input-lg" disabled placeholder="Upload Image">
      <span class="input-group-btn">
        <button class="browse btn btn-primary input-lg" type="button"><i class="glyphicon glyphicon-search"></i> Browse</button>
      </span>

    </div>

    <input type="button" class="btn btn-primary clearmarg" (click)="uploadimage()" value="Upload Image">

  </div>

</div>
`,
})

export class AppComponent  {
public title:String ="Angular File Upload";
constructor(private elem : ElementRef){

}

public uploadimage():void {

let files = this.elem.nativeElement.querySelector('#selectFile').files;
console.log(files[0].name);
}


name = 'Angular'; }
