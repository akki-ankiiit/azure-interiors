/** Migrated reference markup. Interactions are managed by useSiteExperience. */
export default function ApartmentsPageBreadcrumbs() {
  return (
    <div data-theme="" className="header-cramps">
      <a
        hover-tab=""
        aria-label="Home"
        hover-nav-item-l2=""
        data-crumb-item=""
        href="/"
        className="nav-item w-inline-block"
      >
        <div className="nav-item_label">
          <div hover="text" className="nav-item_label_text">
            <div className="l2">Home</div>
          </div>
          <div hover="text" className="nav-item_label_text is-2">
            <div className="l2">Home</div>
          </div>
        </div>
      </a>
      <div className="l2 text-disabled">/</div>
      <a
        hover-tab=""
        aria-label="Selected projects"
        hover-nav-item-l2=""
        data-crumb-item=""
        href="#"
        className="nav-item w-inline-block"
      >
        <div className="nav-item_label">
          <div hover="text" className="nav-item_label_text">
            <div className="l2">Selected projects</div>
          </div>
          <div hover="text" className="nav-item_label_text is-2">
            <div className="l2">Selected projects</div>
          </div>
        </div>
      </a>
    </div>
  );
}
