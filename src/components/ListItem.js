import React, { memo, Fragment } from "react";

import "./ListItem.css";

const ListItem = ({ item, editMode }) => {
  const editText = ($event) => {
    // dispatch logic
  };

  return (
    <Fragment>
      {editMode ? (
        <td>
          <textarea value={item.text} onChange={editText}></textarea>
        </td>
      ) : (
        <td>{item.text}</td>
      )}
    </Fragment>
  );
};

export default memo(ListItem);
