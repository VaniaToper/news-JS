export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IController {
  baseLink: string;
  options: {
    apiKey: string;
  };
}

export interface IOptions {
  options: {
    apiKey: string;
  };
}

export interface INewsSource {
  0:{
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
  }
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}
