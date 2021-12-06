import News from './news/news.ts';
import Sources from './sources/sources.ts';

export class AppView {
  news: News;
  sources: Sources;
  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: News): void {
    const values: number = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Sources): void {
    const values: number = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
