const ProjectCard = (props) => {
  return (
    <div className="card">
      <a href={props.link} rel="noreferrer" target="_blank">
        <img
          className="card-img"
          src={props.image}
          alt="Screenshot of Homepage"
        />
      </a>
      <div className="card-body">
        <a href={props.link} rel="noreferrer" target="_blank">
        <h5 className="card-title">{props.title}</h5>
        </a>
        <p className="card-text">{props.blurb}</p>
        <a
          href={props.repo}
          rel="noreferrer"
          target="_blank"
          className="card-text text-muted small float-right jump"
        >
          View Repo on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
