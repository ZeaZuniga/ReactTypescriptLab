import { Project } from "./Project";

const formatDescription = (description: string): string => {
  return description.substring(0, 60) + "...";
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section className="card">
      <img src={project.imageUrl} alt={project.name} />
      <div className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : ${project.budget.toLocaleString()}</p>
      </div>
    </section>
  );
}