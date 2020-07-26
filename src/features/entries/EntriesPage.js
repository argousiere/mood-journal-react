import React from "react";
import { connect } from "react-redux";
import entriesSSlice from "./slice";
import EntryList from "./EntryList";

const mapDispatchers = {
  addEntry: entriesSSlice.actions.addEntry
};

const ConnectedEntriesPage = ({ addEntry }) => {
  const handleCreate = () => {
    addEntry({
      contents: "Mumble mumble"
    });
  };

  return (
    <div>
      <h2>Entries</h2>
      <div role="toolbar">
        <button type="button" onClick={() => handleCreate()}>
          Create entry
        </button>
        <EntryList />
      </div>
    </div>
  );
};

const EntriesPage = connect(
  null,
  mapDispatchers
)(ConnectedEntriesPage);

export default EntriesPage;
