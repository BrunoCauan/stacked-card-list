import { Component } from '@angular/core';

import { Card } from '../../models/card.model';

@Component({
    selector: 'stacked-card-list',
    templateUrl: './stacked-card-list.component.html',
    styleUrls: ['./stacked-card-list.component.scss'],
})
export class StackedCardListComponent {
    public cards: Card[] = [
        { 
            date: new Date('Jul 19, 1997'), 
            description: '"KAIZOKU OU NI ORE WA NARU"!', 
            avatarUrl: '//api.adorable.io/avatars/172/b.png', 
            authorName: 'Monkey D. Luffy', 
            authorTitle: 'Captain', 
            tags: ['Akuma no Mi', 'Haki']
        },
        { 
            date: new Date('Jul 19, 1997'), 
            description: '"KAIZOKU OU NI ORE WA NARU"!', 
            avatarUrl: '//api.adorable.io/avatars/172/b.png', 
            authorName: 'Monkey D. Luffy', 
            authorTitle: 'Captain', 
            tags: ['Akuma no Mi', 'Haki']
        },
        { 
            date: new Date('Jul 19, 1997'), 
            description: '"KAIZOKU OU NI ORE WA NARU"!', 
            avatarUrl: '//api.adorable.io/avatars/172/b.png', 
            authorName: 'Monkey D. Luffy', 
            authorTitle: 'Captain', 
            tags: ['Akuma no Mi', 'Haki']
        },
        { 
            date: new Date('Jul 19, 1997'), 
            description: '"KAIZOKU OU NI ORE WA NARU"!', 
            avatarUrl: '//api.adorable.io/avatars/172/b.png', 
            authorName: 'Monkey D. Luffy', 
            authorTitle: 'Captain', 
            tags: ['Akuma no Mi', 'Haki']
        },
    ];

    constructor() {}
}
