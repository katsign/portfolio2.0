const JournalImage = (props) => {
  return (
    <div>
      <img
      width="240"
        className="rounded journal m-1"
        src={props.image}
        alt="Rotating Journal"
      />
    </div>
  );
};

export default JournalImage;
