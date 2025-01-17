import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  usePageTitle("감정 일기장");
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data.data);

  const onModifyDate = (operation) => {
    if (operation === "+") {
      setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    } else {
      setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={() => onModifyDate("-")} />}
        rightChild={<Button text={">"} onClick={() => onModifyDate("+")} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
