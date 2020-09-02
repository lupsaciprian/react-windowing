import React, { Fragment } from "react";
import { useEffect } from "react";

import {
  initializeAllRows,
  enterEditMode,
  getNewBatch,
} from "./../store/actions/";
import { useSelector, useDispatch } from "react-redux";

import "./List.css";

import ListItem from "./ListItem";
import Control from "./Control";

const List = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const init = () => {
    dispatch(initializeAllRows());

    window.addEventListener("scroll", function (e) {
      let lastPosition = window.scrollY;
      let documentHeight = document.body.clientHeight;

      if (lastPosition >= documentHeight - 2000) {
        dispatch(getNewBatch());
      }
    });

    // Remove event listener on unmount
  };

  useEffect(init, []);

  return (
    <Fragment>
      <h1>List</h1>
      <table>
        <tbody>
          {list.viewItems.map((listItem) => (
            <tr
              onClick={() => dispatch(enterEditMode(listItem.index))}
              key={"item" + listItem.index}
            >
              <ListItem
                item={listItem}
                editMode={
                  list.editingIndex && listItem.index === list.editingIndex
                }
              />
            </tr>
          ))}
        </tbody>
      </table>

      <Control />
    </Fragment>
  );
};

export default List;
