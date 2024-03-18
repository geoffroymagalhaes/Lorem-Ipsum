import "./App.css";
import Title from "./components/Title";
import Text from "./components/Text";
import Content from "./components/Content";

function App() {
  return (
    <>
      {/* <div className="backGroundColor">
        <h1>lorem</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          corporis ex, a quis non eligendi dolorem assumenda tempore veritatis
          accusamus, laborum magnam tempora qui debitis dolores provident ea,
          omnis quibusdam?Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste sequi aliquam at ea fuga dolorum distinctio. Assumenda
          ducimus sapiente alias animi laudantium nulla quidem? Nam veniam ad
          modi pariatur repudiandae!
        </p>
      </div> */}
      {/* <div className="backGroundColor">
        <Content title="Nono" />
      </div>
      <Title title={"Ipsum"} />
      <Text text={"teeeeexttttlo"} /> */}
      <Content title="Nono" text="azqsdffhy" className="backGroundColor" />
    </>
  );
}

export default App;
