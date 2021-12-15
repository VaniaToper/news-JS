import News from './news/news.ts';
import Sources from './sources/sources.ts';
const startButton = document.querySelector('.start__button');
const sources = document.querySelector('.sources');
const news = document.querySelector('.news');
const home = document.querySelector('.home');
startButton.addEventListener('click', () => {
  sources.style.display = 'block';
  news.style.display = 'block';
  home.style.display = 'none';
});
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
