import "../Components/ExploreStyles.css";

//Sample Data for projects
const projects = [
  {
    title: "Portfolio Design",
    image: "/portfolio-card.jpg",
    creator: "Erik Guarisco",
    likes: 17,
    views: 30,
  },
  {
    title: "Full-Stack Job Board",
    image: "/fullstack-card.jpg",
    creator: "Craig Karl",
    likes: 71,
    views: 412,
  },
  {
    title: "Logo for Tech Startup",
    image: "/logo-card.webp",
    creator: "Mark Boardman",
    likes: 123,
    views: 495,
  },
  {
    title: "E-commerce Store UI Kit",
    image: "/ecommerce-card.webp",
    creator: "Multiple Owners",
    likes: 180,
    views: 858,
  },
];

export default function Explore() {
  return (
    <div className="explore-container">
      <h2 className="section-title">Best of BreadButter</h2>
      <p className="section-subtitle">
        Discover standout creators handpicked by our team.
      </p>
      <div className="cards-wrapper">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>
                {project.title}
                <br />
                {project.creator}
              </h3>
              <div className="stats">
                <span>👍 {project.likes}</span>
                <span>👁️ {project.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
