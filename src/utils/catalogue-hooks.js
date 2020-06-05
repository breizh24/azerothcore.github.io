import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryCatalogueList = `
query CatalogueItems($first: Int, $after: String, $search: String, $categoryIn: [ID]) {
  catalogueItems(first: $first, after: $after, where: {search: $search, categoryIn: $categoryIn}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      date
      title
      slug
      content(format: RENDERED)
      author {
        name
        nicename
        nickname
      }
      databaseId
      featuredImage {
        altText
        uri
        link
      }
    }
  }
}`;

/**
 *
 */
export function useCatalogueList({ ...params }) {
  const allParams = { first: 10, ...params };
  const cacheKey = JSON.stringify(allParams);

  return useSWR([queryCatalogueList, cacheKey], q =>
    gqlFetcher(q, {
      ...allParams,
    })
  );
}

/**
 *
 */
export function getCatalogueList() {
  const allParams = {
    first: 10,
    after: null,
    search: '',
    categoryIn: [],
  };

  const cacheKey = JSON.stringify(allParams);
  return fetchAndCache(queryCatalogueList, { ...allParams }, [
    queryCatalogueList,
    cacheKey,
  ]);
}