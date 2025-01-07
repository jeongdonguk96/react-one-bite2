import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { getEmotionImages } from "../util/get-emotion-iamges";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, createdDate, contents }) => {
  const navigation = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => navigation(`/diary/${id}`)}
      >
        <img src={getEmotionImages(emotionId)} />
      </div>
      <div className="info_section" onClick={() => navigation(`/diary/${id}`)}>
        <div className="create_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="contents">{contents}</div>
      </div>
      <div className="button_section" onClick={() => navigation(`/edit/${id}`)}>
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
