import BrandSeal from "../layout/BrandSeal";
/** Migrated reference markup. Interactions are managed by useSiteExperience. */
export default function HomeHeader() {
  return (
    <div className="theme_on-color">
      <a
        aria-label="Back to top"
        data-theme=""
        href="#hero"
        className="header-logo w-inline-block"
      >
        <div
          data-modal-close="menu"
          aria-label="logo envy maison"
          className="logo_symbol header"
        >
          <div className="logo w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.55544 9.1241C4.81712 7.38578 4.69025 4.69428 4.69025 4.69428C4.69025 4.69428 7.38176 4.82115 9.12007 6.55947C10.8584 8.29779 10.9853 10.9893 10.9853 10.9893C10.9853 10.9893 8.29376 10.8624 6.55544 9.1241Z"
                fill="currentColor"
              />
              <path
                d="M20 0.00151769L16.1569 8.1194C15.5932 9.31006 15.5931 10.6907 16.1568 11.8814L18.4988 16.8291C17.7735 17.1796 17.1891 17.7755 16.8534 18.5091L11.8814 16.1558C10.6907 15.5923 9.31007 15.5923 8.11946 16.156L0 20V19.177C0 18.3493 0.423339 17.5792 1.12211 17.1356L7.64451 12.9953C9.08249 12.0825 10.9183 12.0824 12.3564 12.9951L14.1067 14.1059L12.9961 12.3565C12.0833 10.9184 12.0833 9.08239 12.9962 7.64431L17.1364 1.12212C17.5799 0.423353 18.3501 1.51793e-05 19.1777 1.51793e-05L20 0.00151769Z"
                fill="currentColor"
              />
              <path
                d="M33.4446 30.8759C35.1829 32.6142 35.3097 35.3057 35.3097 35.3057C35.3097 35.3057 32.6182 35.1788 30.8799 33.4405C29.1416 31.7022 29.0147 29.0107 29.0147 29.0107C29.0147 29.0107 31.7062 29.1375 33.4446 30.8759Z"
                fill="currentColor"
              />
              <path
                d="M20 39.9984L23.8431 31.8806C24.4068 30.6899 24.4069 29.3092 23.8432 28.1185L21.5012 23.1708C22.2265 22.8204 22.8109 22.2244 23.1466 21.4909L28.1186 23.8441C29.3093 24.4077 30.6899 24.4076 31.8805 23.8439L40 19.9999V20.8229C40 21.6506 39.5767 22.4208 38.8779 22.8643L32.3555 27.0047C30.9175 27.9175 29.0817 27.9176 27.6436 27.0049L25.8933 25.894L27.0039 27.6435C27.9167 29.0816 27.9167 30.9176 27.0038 32.3556L22.8636 38.8778C22.4201 39.5766 21.6499 39.9999 20.8223 39.9999L20 39.9984Z"
                fill="currentColor"
              />
              <path
                d="M30.8759 6.55544C32.6142 4.81712 35.3057 4.69026 35.3057 4.69026C35.3057 4.69026 35.1789 7.38176 33.4405 9.12008C31.7022 10.8584 29.0107 10.9853 29.0107 10.9853C29.0107 10.9853 29.1376 8.29376 30.8759 6.55544Z"
                fill="currentColor"
              />
              <path
                d="M39.9985 20L31.8806 16.1569C30.69 15.5932 29.3093 15.5931 28.1186 16.1568L23.1709 18.4988C22.8204 17.7735 22.2245 17.1891 21.4909 16.8534L23.8442 11.8814C24.4078 10.6907 24.4077 9.31007 23.844 8.11946L20 0L20.823 3.59746e-08C21.6507 7.2153e-08 22.4208 0.423339 22.8644 1.12211L27.0047 7.64451C27.9175 9.08249 27.9176 10.9183 27.0049 12.3564L25.8941 14.1067L27.6435 12.9961C29.0816 12.0833 30.9176 12.0833 32.3557 12.9962L38.8779 17.1364C39.5767 17.5799 40 18.3501 40 19.1777L39.9985 20Z"
                fill="currentColor"
              />
              <path
                d="M9.12417 33.4445C7.38585 35.1828 4.69435 35.3097 4.69435 35.3097C4.69435 35.3097 4.82122 32.6182 6.55954 30.8799C8.29786 29.1416 10.9894 29.0147 10.9894 29.0147C10.9894 29.0147 10.8625 31.7062 9.12417 33.4445Z"
                fill="currentColor"
              />
              <path
                d="M0.00159168 20L8.11947 23.8431C9.31013 24.4068 10.6908 24.4068 11.8815 23.8432L16.8292 21.5012C17.1796 22.2265 17.7756 22.8109 18.5092 23.1466L16.1559 28.1186C15.5923 29.3093 15.5924 30.6899 16.1561 31.8805L20.0001 40H19.1771C18.3494 40 17.5793 39.5766 17.1357 38.8779L12.9954 32.3555C12.0825 30.9175 12.0825 29.0816 12.9951 27.6436L14.106 25.8933L12.3566 27.0038C10.9185 27.9167 9.08247 27.9167 7.64438 27.0038L1.1222 22.8636C0.423427 22.42 8.89523e-05 21.6499 8.90608e-05 20.8222L0.00159168 20Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="header-logo_bg b-desk w-embed">
          <BrandSeal />
        </div>
        <div className="header-logo_bg b-mob w-embed">
          <BrandSeal />
        </div>
      </a>
      <div data-theme="" className="header-nav">
        <div className="header-nav_list f-mob">
          <div
            hover-nav-item-l2-trigger=""
            data-modal-menu-btn="mob"
            className="btn-menu"
          >
            <div className="btn-menu_label is-active">
              <a
                hover-nav-item-l2=""
                aria-label="Menu"
                href="#"
                className="nav-item w-inline-block"
              >
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text">
                    <div className="l2">Menu</div>
                  </div>
                  <div hover="text" className="nav-item_label_text is-2">
                    <div className="l2">Menu</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="btn-menu_label">
              <a
                hover-nav-item-l2=""
                aria-label="Close"
                href="#"
                className="nav-item w-inline-block"
              >
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text">
                    <div className="l2">Close</div>
                  </div>
                  <div hover="text" className="nav-item_label_text is-2">
                    <div className="l2">Close</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="ico-24">
              <div className="ico">
                <div data-ico-menu="is-1" className="ico w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div data-ico-menu="is-2" className="ico ia-2 w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav_list f-desk">
          <a
            hover-link=""
            aria-label="Selected projects"
            href="/projects"
            className="link w-inline-block"
          >
            <div className="link_label">
              <div className="link_label_text">
                <div hover="text" className="h6">
                  Selected
                  <br />
                  Projects
                </div>
              </div>
              <div className="link_label_text is-2">
                <div hover="text" className="h6">
                  Selected
                  <br />
                  Projects
                </div>
              </div>
            </div>
          </a>
          <div className="u-24" />
          <a
            data-modal-cta-btn="book-a-call"
            aria-label="Let\u2019s talk"
            hover-nav-item-l2=""
            href="#"
            className="nav-item w-inline-block"
          >
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text">
                <div className="l2">Let’s talk</div>
              </div>
              <div hover="text" className="nav-item_label_text is-2">
                <div className="l2">Let’s talk</div>
              </div>
            </div>
          </a>
          <div className="u-4" />
          <a
            hover-nav-item-l2=""
            aria-label="Contact"
            href="/contact"
            className="nav-item w-inline-block"
          >
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text">
                <div className="l2">Contact</div>
              </div>
              <div hover="text" className="nav-item_label_text is-2">
                <div className="l2">Contact</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div data-theme="" className="s-bar-w">
        <div data-s-bar="" className="s-bar">
          <div data-s-bar-thumb="" className="s-bar_thumb">
            <div data-s-bar-label="" className="l1 a-center">
              00
            </div>
          </div>
          <div data-s-bar-fill="" className="s-bar_fill" />
          <div data-s-bar-track="" className="s-bar_track" />
        </div>
      </div>
      <div data-theme="" className="s-down">
        <div className="s-down_arrow w-embed">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 48 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.36533 3C7.10389 3.54701 6.85117 4.02564 6.60716 4.4359C6.34572 4.84615 6.09299 5.18804 5.84899 5.46154L45 5.46154L45 6.53846L5.84899 6.53846C6.09299 6.82906 6.34572 7.17949 6.60716 7.58974C6.85117 8 7.10389 8.47009 7.36533 9L6.45029 9C5.35226 7.75214 4.20193 6.82906 2.99932 6.23077L2.99932 5.76923C4.20193 5.18804 5.35226 4.26496 6.45029 3L7.36533 3Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="l2">Scroll</div>
      </div>
    </div>
  );
}
