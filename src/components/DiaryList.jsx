const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
      </div>
      <div className="list_wrapper"></div>
    </div>
  );
};

export default DiaryList;
