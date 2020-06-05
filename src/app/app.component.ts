import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tag-name , find it in index.html --> main component , main entry point
  templateUrl: './app.component.html', // address --> html ( component view )
  styleUrls: ['./app.component.css'] // array of css style files for this component
})

// class --> ( properties + methods )
export class AppComponent {

  // properties
  name: string = "moniem"
  age:number = 30
  imageUrl = "https://png.pngtree.com/element_our/png/20181229/garden-rose-flower-centifolia-roses-floral-design-png_302377.jpg"
isStyleActive=true
currentClass = "myDiv2"
// methods

changeName(){
  this.name="zena&samar"
}

changeImage(){
  this.imageUrl="https://img.favpng.com/1/8/12/2017-toyota-yaris-2018-toyota-yaris-2016-toyota-yaris-car-png-favpng-gU5GgcATu1A1GhuELH81Piikh.jpg"
}

activateStyle(){
  this.isStyleActive = !this.isStyleActive
}

changeStyle(){
  if(this.currentClass==="myDiv2"){
    this.currentClass="myDiv"
  }else{
    this.currentClass="myDiv2"
  }
}



}



// component file structure ( import component + @Component metadata(selector,templateUrl,styleUrls) + class )