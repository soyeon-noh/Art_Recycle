import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardInsert() {
  const { changeInput, onClickSave } = useCommuContext();

  return (
    <div className="detail_view board_insert">
      <div>
        <label>작성자</label>
        <input onChange={changeInput} name="b_writer" type="text" />
      </div>
      <div>
        <label>제목</label>
        <input onChange={changeInput} name="b_title" type="text" />
      </div>
      <div>
        <label>내용</label>
        <input onChange={changeInput} name="b_content" type="text" />
      </div>
      <div className="community">
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BoardInsert;