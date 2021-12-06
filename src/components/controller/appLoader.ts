import Loader from './loader.ts';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '17ca39f625114ae3a6933e4f8f6297c7',
    });
  }
}

export default AppLoader;
