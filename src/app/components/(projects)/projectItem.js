import React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ id, image, title, tags, url, description }) => {
  return (
    <div className="single_project_slider_two" key={id}>
      <img src={image} alt={title} className="carousel_img" />
      {/* <ul className="list-unstyled custom_carousel_list">
        {tags.map((tag, index) => (
          <li key={index}>
            <span className="tag_btn">{tag}</span>
          </li>
        ))}
      </ul> */}
      <div className="project_bottom">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        {/* <p style={{ color: 'white', fontWeight: 'bold' }}>{description}</p> */}
        <Link legacyBehavior href={`/projects/${encodeURIComponent(id)}`}>
          <a className="project_btn">
            View project <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
