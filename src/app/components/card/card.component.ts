import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Card } from '../../models/card.model';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: { 'class': 'stacked-card' }
})
export class CardComponent {
    @Input() card: Card;

    constructor() { }
}
