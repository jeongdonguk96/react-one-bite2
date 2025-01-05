import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Header from "./components/Header";
import Button from "./components/Button";
import NotFoud from "./pages/NotFoud";
import { getEmotionImages } from "./util/get-emotion-iamges";

function App() {
  const navigation = useNavigate();
  const onClickButton = () => {
    navigation("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button text="버튼" type="DEFAULT" />
      <Button text="버튼" type="POSITIVE" />
      <Button text="버튼" type="NEGATIVE" />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFoud />} />
      </Routes>
    </>
  );
}

export default App;
