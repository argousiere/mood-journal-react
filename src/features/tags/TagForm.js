import React, { useState } from "react";
import tagsSlice from "./slice";
import { connect } from "react-redux";

const mapDispatchers = {
  addTag: tagsSlice.actions.addTag
};

export function ConnectedTagForm({ addTag }) {
  const [tagLabel, setTagLabel] = useState("");

  const handleChange = e => setTagLabel(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (!tagLabel.trim()) {
      return;
    }

    addTag({ label: tagLabel });
    setTagLabel("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export const TagForm = connect(
  null,
  mapDispatchers
)(ConnectedTagForm);

export default TagForm;
