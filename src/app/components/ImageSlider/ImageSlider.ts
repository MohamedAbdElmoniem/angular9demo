import { Component } from '@angular/core'



@Component({
    templateUrl: './ImageSlider.html',
    styleUrls: ['./ImageSlider.css'],
    selector: "image-slider"
})

export class ImageSlider {

    // properties

    imagesArray = [
        "https://img.favpng.com/1/8/12/2017-toyota-yaris-2018-toyota-yaris-2016-toyota-yaris-car-png-favpng-gU5GgcATu1A1GhuELH81Piikh.jpg",
        "https://vectorforfree.com/wp-content/uploads/2019/04/BMW_Car_PNG_VectorForFree.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAIYhm3MGhyQpA9Q3c-6KFwpIjMmP0I-7Ez1qZFKqgCaEObK0m&usqp=CAU"
    ]

    selectedImageIndex = 0



    // methods

    next() {
        // last image
        if (this.selectedImageIndex === this.imagesArray.length - 1) {
            this.selectedImageIndex = 0
        } else {
            this.selectedImageIndex += 1
        }

    }

    prev() {
        // first image 
        if (this.selectedImageIndex === 0) {
            this.selectedImageIndex = this.imagesArray.length - 1
        } else {
            this.selectedImageIndex -= 1
        }
    }

    getUserName(username) {
        console.log(username.value)
    }

}