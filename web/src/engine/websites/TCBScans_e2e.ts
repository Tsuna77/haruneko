﻿import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'tcbscans',
        title: 'TCB Scans'
    },
    container: {
        url: 'https://onepiecechapters.com/mangas/1/ace-novel-manga-adaptation',
        id: '/mangas/1/ace-novel-manga-adaptation',
        title: 'Ace Novel - Manga Adaptation'
    },
    child: {
        id: '/chapters/276/ace-novel-manga-adaptation-chapter-4',
        title: 'Chapter 4 : Final Chapter: Ace\'s Adventure'
    },
    entry: {
        index: 0,
        size: 1_410_846,
        type: 'image/png'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());