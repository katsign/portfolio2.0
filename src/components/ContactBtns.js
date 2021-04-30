const ContactBtns = () => {
  return (
    <div className="btn-group btn-group-sm mr-2" role="group">
      <a
        rel="noreferrer"
        target="_blank"
        className="btn btn-primary"
        href="mailto:mailtokatsign@gmail.com?subject=Development%20Inquiry"
      >
        Email Me
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        className="btn btn-primary"
        href="https://www.linkedin.com/in/katsigndev/"
      >
        LinkedIn
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        className="btn btn-primary"
        href="https://github.com/katsign"
      >
        GitHub
      </a>
    </div>
  );
};

export default ContactBtns;
