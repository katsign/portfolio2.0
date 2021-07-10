const Graphic = (props) => {
    return (
      <div>
        <img
          width="240"
          className="rounded gallery m-1"
          src={props.image}
          alt="Example of Work"
        />
      </div>
    );
  };
  
  export default Graphic;