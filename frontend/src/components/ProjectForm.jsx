import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../features/projects/projectSlice';

function ProjectForm() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createProject({ title }));
    setTitle('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Project</label>
          <input
            type="text"
            name="text"
            id="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-block"
            type="submit
            "
          >
            Add Project
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProjectForm;
