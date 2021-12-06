import './news.css';
import { INews } from '../../../types/types';

class News {
  draw(data: Array<INews>): void {
    const news: Array<INews> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment()!;
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp')!;

    news.forEach((item, idx) => {
      const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true);
      if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');
      newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
      newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsClone.querySelector('.news__description-title').textContent = item.title as string;
      newsClone.querySelector('.news__description-source').textContent = item.source.name as string;
      newsClone.querySelector('.news__description-content').textContent = item.description as string;
      newsClone.querySelector('.news__read-more a').setAttribute('href' as string, item.url as string);

      fragment.append(newsClone);
    });

    document.querySelector('.news').innerHTML = '' as string;
    if (!news || news.length == 0)
      document.querySelector('.news').innerHTML = 'We are sorry, but there isn`t any news.' as string;
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
