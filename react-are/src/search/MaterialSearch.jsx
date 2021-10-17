// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContext";

const materialData = [
  "목재",
  "직물",
  "플라스틱",
  "가죽",
  "세라믹",
  "석재",
  "종이",
  "금속",
  "유리",
  "고무",
  "식료품",
  "기타",
];
const MaterialSearch = () => {
  const { clickTag } = useHashTagContext();

  // const material_box = useCallback(() => {
  const material_box = () => {
    return materialData.map((text) => {
      return (
        <div className="tag material" onClick={clickTag}>
          {text}
        </div>
      );
    });
  };
  // }, []);

  return (
    <section className="search_section material">
      <div className="material_box">{material_box()}</div>
    </section>
  );
};

export default MaterialSearch;
