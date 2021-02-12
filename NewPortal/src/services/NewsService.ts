import { Article } from '../model/Article';

export class NewsService {
  private readonly apiKey = '5a914a188bd640c680561e728743e4cb';

  getTopHeadlinesByCountry(countryCode: string): Promise<Article[] | never> {
    return fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${this.apiKey}`)
      .then(response => response.json())
      .then(results => results.articles as Article[]);
  }
}
