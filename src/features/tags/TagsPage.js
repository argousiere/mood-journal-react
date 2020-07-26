import React from "react";
import TagsList from "./TagsList";
import TagForm from "./TagForm";

export default function TagsPage() {
  return (
    <div>
      <h2>Tags</h2>

      <TagForm />
      <TagsList />
    </div>
  );
}
