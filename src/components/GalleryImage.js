const GalleryImage = (props) => {
  return (
    <div>
      <img
        width="360"
        className="rounded gallery m-1"
        src={props.image}
        alt="Example of Work"
      />
    </div>
  );
};

export default GalleryImage;
