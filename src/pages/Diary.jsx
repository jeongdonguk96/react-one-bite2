import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  usePageTitle(`${params.id}번 일기`);
  const navigation = useNavigate();
  const currentDiaryItem = useDiary(params.id);
  console.log(currentDiaryItem);

  if (!currentDiaryItem) {
    return <div>로딩중</div>;
  }

  // const [createdDate, emotionId, contents] = currentDiaryItem;

  return (
    <div>
      <Header
        // title={currentDiaryItem.createdDate}
        leftChild={
          <Button onClick={() => navigation(-1)} text={"< 뒤로 가기"} />
        }
        rightChild={
          <Button
            onClick={() => navigation(`/edit/${params.id}`)}
            text={"수정하기"}
          />
        }
      />
      {/* <Viewer emotionId={emotionId} contents={contents} /> */}
      <Viewer />
    </div>
  );
};

export default Diary;
