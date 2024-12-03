import React from "react";

export default function NewsCard(props) {
  let { title, description, imgUrl, newsUrl, author, publishedAt } = props;
  const descLength = title.length < 150 ? 150 - title.length : "";
  return (
    <div>
      <div className="card my-2">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
          }
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>
            {author}
            <br />
            {new Date(publishedAt).toGMTString()}
          </p>
          <p className="card-text">
            {description ? description.slice(0, descLength) : ""}...
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="__blank"
            className="btn btn-sm btn-danger"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
}
