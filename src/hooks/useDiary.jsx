import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();
  const navigation = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      navigation("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
