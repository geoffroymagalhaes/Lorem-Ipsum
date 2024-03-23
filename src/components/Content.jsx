import Title from "./Title";
import Text from "./Text";
const Content = ({ title, text }) => {
  return (
    <div className="backGroundContainer">
      <Title title={title} />
      <Text text={text} />
    </div>
  );
};
export default Content;
