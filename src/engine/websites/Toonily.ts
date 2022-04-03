import { Tags } from '../Tags';
import icon from './Toonily.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import { MangasMultiPageCSS, ChaptersSinglePageCSS, PagesSinglePageCSS } from './decorators/WordPressMadara';
import { ImageDirect } from './decorators/Common';

@MangasMultiPageCSS()
@ChaptersSinglePageCSS()
@PagesSinglePageCSS()
@ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('toonily', 'Toonily', 'https://toonily.com', Tags.Media.Manhwa, Tags.Source.Aggregator, Tags.Rating.Erotica, Tags.Language.English);
    }

    public override get Icon() {
        return icon;
    }
}