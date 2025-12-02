import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

export default function PostDetail({ posts }) {
  const { id } = useParams(); 
  const post = posts.find((post) => post.id.toString() === id);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (!post) {
    return <h1>記事が見つかりません</h1>;
  }

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <div>
            <img src={post.thumbnailUrl} alt={post.title} />
          </div>

          <div className={styles['flex-row']}>
            <p>{post.createdAt}</p>
            <div className={styles['category-flex-row']}>
              {post.categories.map((categorie, index) => (
                <span key={index} className={styles['category-tag']}>
                  {categorie}
                </span>
              ))}
            </div>
          </div>

          <h2>{post.title}</h2>

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </>
      )}
    </>
  );
}