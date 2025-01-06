import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const thisMonth = () => {
  return `${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월`;
};

const Home = () => {
  return (
    <div>
      <Header
        title={`${thisMonth()}`}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />

      <DiaryList />
    </div>
  );
};

export default Home;
