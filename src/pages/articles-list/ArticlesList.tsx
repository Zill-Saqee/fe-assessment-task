import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMostPopularArticlesQuery } from '../../services/articlesApi';
import styles from './ArticlesList.module.css'; // Import CSS module

const ArticlesList: React.FC = () => {
  const { data: articles, isLoading, isError } = useGetMostPopularArticlesQuery();

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (isError) {
    return <div className={styles.container}>Error: Unable to fetch articles.</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>NY Times Most Popular Articles</h2>
      <ul className={styles.articleList}>
        {articles?.results?.map((article) => (
          <li key={article.id} className={styles.articleItem}>
            <Link to={`/articles/${article.id}`} className={styles.articleLink}>
              <div className={styles.articleInfo}>
                <div className={styles.articleThumbnail}>
                  <img src={article.media[0]?.['media-metadata'][0]?.url} alt="Article Thumbnail" />
                </div>
                <div className={styles.articleDetails}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleMetadata}>
                    <span>By: {article.byline}</span>
                    <span>Published Date: {article.published_date}</span>
                  </p>
                  <p className={styles.articleAbstract}>{article.abstract}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
