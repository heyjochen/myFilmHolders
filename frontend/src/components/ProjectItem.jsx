import { useDispatch } from 'react-redux';
import { deleteProject } from '../features/projects/projectSlice';

function ProjectItem({ project }) {
  const dispatch = useDispatch();

  return (
    <div className="project">
      <div>{new Date(project.createdAt).toLocaleString('en-US')}</div>
      <h2>{project.title}</h2>
      <h2>{project.camera}</h2>
      <h2>{project.lens}</h2>
      <h2>{project.film}</h2>
      <h2>{project.notes}</h2>
      <button
        onClick={() => dispatch(deleteProject(project._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}
export default ProjectItem;
