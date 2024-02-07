import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './ArticleDetail.module.css'; // Import CSS file for styling
import { useGetMostPopularArticlesQuery } from '../../services/articlesApi';
import { Article } from '../../constants/types';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: response, isLoading, isError } = useGetMostPopularArticlesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !response || response.status !== 'OK') {
    return <div>Error: Unable to fetch article details.</div>;
  }

  const article: Article | undefined = response.results.find((article: Article) => article.id === Number(id));

  if (!article) {
    return <div>No details found for this article.</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>Back</Link> {/* Add Link for back button */}
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.metadata}>Published Date: {article.published_date}</p>
      <p className={styles.metadata}>Byline: {article.byline}</p>
      <p className={styles.metadata}>Section: {article.section}</p>
      <p className={styles.metadata}>Abstract: {article.abstract}</p>
      <p className={styles.metadata}>ADX Keywords: {article.adx_keywords}</p>
      <p className={styles.metadata}>Des Facet: {article.des_facet.join(', ')}</p>
      <p className={styles.metadata}>Org Facet: {article.org_facet.join(', ')}</p>
      <p className={styles.metadata}>Per Facet: {article.per_facet.join(', ')}</p>
      <p className={styles.metadata}>Geo Facet: {article.geo_facet.join(', ')}</p>
      {article.media.length > 0 && (
        <div className={styles.mediaContainer}>
          <img src={article.media[0]['media-metadata'][0].url} alt="Article Thumbnail" className={styles.image} />
          <p className={styles.caption}>{article.media[0].caption}</p>
        </div>
      )}
      <p className={styles.metadata}>ETA ID: {article.eta_id}</p>
    </div>
  );
};

export default ArticleDetail;
