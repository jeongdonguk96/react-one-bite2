import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return <div>{params.id}번 Diary예요~</div>;
};

export default Diary;
