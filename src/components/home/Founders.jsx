const founders = [
  {
    name: "Rashi Bothra",
    image: "/assets/r-r/rashi.webp",
    width: 1080,
    height: 1350,
    alt: "Rashi Bothra, Co-Founder and Principal Designer at Azure Interiors",
    bio: "Rashi brings a refined eye for composition, detail and material relationships. She leads the conceptual direction of Azure’s residential and hospitality projects, balancing creative expression with the realities of how a space must function and endure.",
    quote:
      "A beautiful space should never feel intimidating. It should feel like an elevated version of everyday life.",
  },
  {
    name: "Ruchi Gehani",
    image: "/assets/r-r/ruchi.webp",
    width: 1080,
    height: 1080,
    alt: "Ruchi Gehani, Co-Founder and Principal Designer at Azure Interiors",
    bio: "Ruchi’s perspective is grounded in spatial clarity, individuality and an intuitive understanding of the client. She leads spatial planning and bespoke execution, shaping how colour, texture, furniture and light give each home its own identity.",
    quote:
      "We aren’t just arranging furniture; we are organizing how people will experience their day.",
  },
];

export default function Founders() {
  return (
    <section className="section clip studio-founders">
      <div className="container">
        <div className="founders_intro">
          <p data-scroll-reveal="p" className="l1 a-center">
            The studio behind the spaces
          </p>
          <div className="u-24" />
          <h2 data-scroll-reveal="h" className="h2 a-center">
            Two voices
            <span className="founders_intro_a">One vision</span>
          </h2>
          <div className="u-48" />
          <p data-scroll-reveal="p" className="p1 a-center founders_intro_lead">
            Together they shape every project — one composing the narrative, the
            other grounding it in the rhythms of everyday life.
          </p>
        </div>

        <div className="founders_list">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className={`founder${index % 2 ? " founder--reverse" : ""}`}
            >
              <figure className="founder_media">
                <div data-scroll-reveal="slide" className="img-w founder_img">
                  <img
                    src={founder.image}
                    width={founder.width}
                    height={founder.height}
                    loading="lazy"
                    alt={founder.alt}
                    className="img"
                  />
                </div>
              </figure>
              <div className="founder_body">
                <p data-scroll-reveal="p" className="l1 founder_role">
                  Co-Founder &amp; Principal Designer
                </p>
                <h3 data-scroll-reveal="h" className="h4 founder_name">
                  {founder.name}
                </h3>
                <div className="founder_rule">
                  <div data-scroll-reveal="line" className="line-h" />
                </div>
                <p data-scroll-reveal="p" className="p1 founder_bio">
                  {founder.bio}
                </p>
                <blockquote data-scroll-reveal="p" className="founder_quote">
                  “{founder.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
