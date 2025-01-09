import "./Emotion.css";
import { getEmotionImages } from "../util/get-emotion-iamges";

const Emotion = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      className={`Emotion ${isSelected ? `Emotion_on_${emotionId}` : ""}`}
      onClick={onClick}
    >
      <img className="emotion_img" src={getEmotionImages(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default Emotion;
