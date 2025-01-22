import { Carousel } from "react-bootstrap";
import projects from "../data/projects.json";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Carousel>
        {projects.map(
          (project, index) => (
            console.log(project.thumbnail),
            (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={projects.thumbnail}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <p>{project.date}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          )
        )}
      </Carousel>
    </div>
  );
};

export default ProjectsPage;
