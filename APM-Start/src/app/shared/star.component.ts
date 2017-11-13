import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> =
                new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5; //86px is width of the div in the html
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`); //sends out a notification of this click to the container
    }
}

