import { Project } from "./Project";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({projects}: ProjectListProps) {
  return (
        <section className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <section className="card">
                        <img src={project.imageUrl} alt={project.name} />
                        <div className="section dark">
                            <h5 className="strong">
                                <strong>{project.name}</strong>
                            </h5>
                            <p>{project.description}</p>
                            <p>Budget : ${project.budget.toLocaleString()}</p>
                        </div>
                    </section>
                </div>
            ))}
        </section>
    )
}
