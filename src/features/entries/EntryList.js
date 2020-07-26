import React from "react";
import Entry from "./Entry";
import { connect } from "react-redux";
import entriesSlice from "./slice";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({ items: state.entries });

const mapDispatch = {
  deleteEntry: entriesSlice.actions.deleteEntry
};

const ConnectedEntryList = ({ items, deleteEntry }) => {
  const handleDelete = item => {
    deleteEntry(item);
  };

  if (items.length === 0) {
    return <div>There are no entries to display.</div>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/entries/${item.id}`}>
            <article>
              <Entry entry={item} />
            </article>
          </Link>
          <ul role="toolbar">
            <li>
              <button type="button" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

const EntryList = connect(
  mapStateToProps,
  mapDispatch
)(ConnectedEntryList);

export default EntryList;
