import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({ tags: state.tags });

export function ConnectedTagsList({ tags }) {
  if (tags.length === 0) {
    return <div>There are currently no tags.</div>;
  }

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.id}>{tag.label}</li>
      ))}
    </ul>
  );
}

const TagsList = connect(
  mapStateToProps,
  null
)(ConnectedTagsList);

export default TagsList;
