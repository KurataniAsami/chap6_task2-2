import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div className={styles["flex-row"]}>
            <span>{post.createdAt}</span>
            <div className={styles["category-flex-row"]}>
              {post.categories.map((categorie, index) => (
                <span key={index} className={styles["category-tag"]}>
                  {categorie}
                </span>
              ))}
            </div>
          </div>

          <Link className={styles["post-title"]} to={`/post/${post.id}`}>
            {post.title}
          </Link>

          <div className={styles["line-clamp"]}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
// 