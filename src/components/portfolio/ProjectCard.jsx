import { photography } from "../../data/media";
export default function ProjectCard({ project }) {
  return (
    <div
      data-filter-item=""
      data-sort-item=""
      role="listitem"
      className="apart-cms_list_item"
    >
      <a
        href={`/projects/${project.slug}`}
        hover-apart-card=""
        hover-img-card=""
        data-sort-relevant={project.number}
        className="apart-card portfolio-card"
      >
        <div className="apart-card_c">
          <div className="apart-card_t">
            <p data-type={project.type} className="l2 a-center">
              {project.category}
            </p>
            <div className="u-4" />
            <p
              data-city={project.city.toLowerCase()}
              className="l2 reg a-center"
            >
              {project.city}, India
            </p>
          </div>
          <div className="u-24" />
          <div className="portfolio-card-image">
            <img
              hover="img"
              src={project.image}
              alt={photography[project.cover].alt}
              loading="lazy"
            />
          </div>
          <div className="u-24" />
          <div className="apart-card_b">
            <h2 className="h5 a-center portfolio-card-title">{project.name}</h2>
            <div className="u-16" />
            <div className="apart-card_data-list">
              <span data-sort-area={project.area} className="l2 reg">
                {project.area.toLocaleString("en-IN")} sq ft
              </span>
              <span className="data-divider" />
              <span className="l2 reg">{project.year}</span>
            </div>
            <div className="u-16" />
            <p className="l2 reg a-center">
              {project.status} <span aria-hidden="true">↗</span>
            </p>
          </div>
        </div>
        <div className="portfolio-card-frame" />
        <div hover="shadow" className="apart-card_shadow" />
      </a>
    </div>
  );
}
