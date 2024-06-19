import { HttpResponse, http } from 'msw';

const keywords: string[] = [];
export const keywordHandler = [
  http.get('/search', async () => {
    return HttpResponse.json({ results: keywords } as { results: string[] }, {
      status: 200,
    });
  }),
];
