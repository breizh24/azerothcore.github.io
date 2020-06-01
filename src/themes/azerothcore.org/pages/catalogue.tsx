import * as React from 'react';
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';
import { useSWRPages } from 'swr';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import Layout from '@/components/Layout';
import CatalogueFilters from '@/components/CatalogueFilters';
import { useCatalogueList } from '@/utils/catalogue-hooks';
import { getPreviewText } from '@/utils/functions';

const Catalogue: React.FC = () => {
  const [errorOnFetch, setErrorOnFetch] = React.useState(false);
  const [filters, setFilters] = React.useState({ search: '' });
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
  });
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    'catalogue-list',

    // page component
    ({ offset, withSWR }) => {
      const { data, error } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCatalogueList(offset, filters.search)
      );
      console.log(offset);
      console.log(data);
      if (error) {
        setErrorOnFetch(true);
      }
      return (
        <>
          <Row>
            {data &&
            data.catalogueItems !== null &&
            data.catalogueItems.nodes.length > 0 ? (
              data.catalogueItems.nodes.map(item => {
                return (
                  <Col lg="6" md="6" xl="6" key={item.databaseId}>
                    <div className="testimonials-card-container">
                      <Card className="post-card" body>
                        <div className="testimonial-image-container">
                          {item.featuredImage && (
                            <img
                              src={item.featuredImage.sourceUrl}
                              alt={item.featuredImage.altText}
                            />
                          )}
                        </div>
                        <hr />
                        <CardTitle className="post-card-title">
                          <h3>{item.title}</h3>
                        </CardTitle>
                        <div className="card-text">
                          <div className="card-preview-text">
                            <ReactMarkdown
                              source={
                                item.content
                                  ? getPreviewText(item.content, 100)
                                  : ''
                              }
                              escapeHtml={false}
                            />
                          </div>
                        </div>
                        <div className="button-container">
                          {/* <LinkPrefetch
                              href="/[...dynamic]"
                              as={`${process.env.BACKEND_URL}/catalogue/${item.slug}`}
                              passHref
                              prefetch={false}
                              className="testimonials-link"
                              prepare={() =>
                                getCurrentCatalogueItem(testimonial.slug)
                              }
                            >
                              <Button className="post-card-button">
                                Read more
                              </Button>
                            </LinkPrefetch> */}
                        </div>
                      </Card>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Col>
                <p className="no-data">
                  {!isLoadingMore &&
                    filters.search.length > 0 &&
                    'The search did not bring any results'}
                  {!isLoadingMore &&
                    filters.search.length === 0 &&
                    `There are no available items`}
                </p>
              </Col>
            )}
          </Row>

          <style jsx>
            {`
              p {
                text-align: center;
              }
              .testimonials-card-container {
                padding: 10px;
              }
              .card-text {
                margin-bottom: 10px;
                min-height: 72px;
              }
              h3 {
                font-size: 1.35rem;
                margin-bottom: 0.3rem;
              }
              hr {
                margin-top: 20px;
                margin-bottom: 0.7rem;
              }
              .button-container {
                display: flex;
                justify-content: stretch;
              }
              .testimonial-image-container {
                height: 170px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              img {
                width: auto;
                max-height: 100%;
                max-width: 100%;
              }
              .no-data {
                margin-top: 15px;
              }
            `}
          </style>
          <style jsx global>
            {`
              .post-card-title {
                margin-bottom: 0;
              }
              .post-card-button {
                width: 100%;
              }
              .card-preview-text p {
                margin: 0;
              }
              .card-preview-text p::first-letter {
                text-transform: uppercase;
              }
              .card-preview-text ol,
              .card-preview-text li {
                list-style: none;
              }
              .testimonials-link {
                width: 100%;
                height: 100%;
              }
            `}
          </style>
        </>
      );
    },

    // get next page's offset from the page endCursor
    SWR => {
      // there's no next page
      if (SWR.data && !SWR.data.catalogueItems.pageInfo.hasNextPage)
        return null;

      // offset = page endCursor
      return SWR.data.catalogueItems.pageInfo.endCursor;
    },

    // deps of the page component
    [filters]
  );

  const handleSubmit = values => {
    console.log(values);
    setFilters(values);
  };

  return (
    <Layout
      page="catalogue"
      title="Catalogue"
      lead="Enhance your AzerothCore experience"
    >
      <div className="catalogue-container">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <CatalogueFilters handleSubmit={handleSubmit} />
            </Col>
            <Col xs="12" md="6" style={{ padding: '0 25px' }}>
              <div className="submit-instructions">
                <p>
                  Want to submit your <strong>module</strong>? Check the
                  instructions here
                </p>
                <p>
                  Want to submit your <strong>lua script</strong>? Check the
                  instructions here
                </p>
              </div>
            </Col>
          </Row>

          {pages}
          <Row>
            <Col>
              <div className="load-more" ref={ref}>
                {!isReachingEnd && !isLoadingMore && (
                  <Button onClick={loadMore}>Load more</Button>
                )}
                {isLoadingMore && !errorOnFetch && (
                  <Spinner
                    style={{ width: '3rem', height: '3rem' }}
                    type="grow"
                  />
                )}
                {errorOnFetch && (
                  <p>There was an error fetching the catalogue</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .load-more {
            display: flex;
            justify-content: center;
            margin-top: 15px;
          }
          p {
            text-align: center;
          }
          .submit-instructions {
            background-color: #d1ecf1;
            border: 1px solid #bee5eb;
            color: #0c5460;
            padding: 15px 15px;
            border-radius: 0.25rem;
          }
          .submit-instructions p {
            text-align: left;
          }
          .submit-instructions p:last-child {
            margin-bottom: 0;
          }
        `}
      </style>
    </Layout>
  );
};

export default Catalogue;