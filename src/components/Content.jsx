const Content = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title} </h2>
      <p>{props.text}</p>
    </div>
  );
};
export default Content;
