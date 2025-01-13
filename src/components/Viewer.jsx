// import "./Viewer.css";
import { getEmotionImages } from "../util/get-emotion-iamges";
import { emotionList } from "../util/constants";

const Viewer = () => {
  const emotionId = 5;
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div>
          <img src={getEmotionImages(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="contents_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
