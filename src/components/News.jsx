import React from "react";
import { useGlobalContext } from "../Context/Context";

const News = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) return <h2>loading ...</h2>;
  return (
    <section className="news-container">
      {hits.map((news) => {
        const { objectID, title, num_comments, url, points, author } = news;

        return (
          <article key={objectID} className="news">
            <h4>{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>

            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>{" "}
              |{" "}
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default News;
