const Form = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Form;
