import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const navigation = useNavigate();
  const { onModify, onDelete } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    const result = window.confirm(
      "정말 삭제할까요? 삭제된 일기는 복구되지 않아요!"
    );
    if (result) {
      onDelete(params.id);
      navigation("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    const result = window.confirm("정말 수정할까요?");
    if (result) {
      onModify(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.contents
      );

      navigation("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button text={"< 뒤로 가기"} onClick={() => navigation(-1)} />
        }
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
