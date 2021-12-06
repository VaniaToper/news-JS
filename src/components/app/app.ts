import { INewsSource } from '../../types/types';
import AppController from '../controller/controller.ts';
import { AppView } from '../view/appView.ts';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e: Event): void =>
        this.controller.getNews(e, (data: Array<INewsSource>) => this.view.drawNews(data))
      );
    this.controller.getSources((data: Array<INewsSource>): void => {
      this.view.drawSources(data);
    });
  }
}

export default App;
