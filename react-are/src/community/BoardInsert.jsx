import React, { useEffect } from "react";
import { useCommuContext } from "../context/CommunityContextProvider";
import note from "../modules/note.js";

function BoardInsert() {
  const { changeInput, onClickSave } = useCommuContext();

  useEffect(() => {
    {
      note;
    }
  }, []);

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
      {/* <div>
        <label>내용</label>
        <input onChange={changeInput} name="b_content" type="text" />
      </div> */}
      <textarea id="summernote"></textarea>
      <div className="community">
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BoardInsert;
