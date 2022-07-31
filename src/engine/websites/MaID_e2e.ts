import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'maid',
        title: 'MAID'
    }/*,
    container: {
        url: 'https://www.maid.my.id/manga/.../',
        id: '/manga/.../',
        title: 'Manga ?'
    },
    child: {
        id: '/manga/.../.../',
        title: 'Chapter ?'
    },
    entry: {
        index: 0,
        size: -1,
        type: 'image/jpeg'
    }*/
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());