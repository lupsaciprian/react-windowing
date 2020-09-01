import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MAX_AMOUNT_OF_ITEMS } from "./../constants/";

import { jumpTo } from "./../store/actions/";
import debounce from "../functions/debounce";

import "./Control.css";

const Control = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.list.allItems.length);
  const [jumpToInput, setJumpToInput] = useState(0);

  const jumpToChanged = (event) => {
    const value = parseInt(event.target.value);
    setJumpToInput(value);

    if (value <= MAX_AMOUNT_OF_ITEMS)
      debounce(() => {
        dispatch(jumpTo(value));
      }, 1000);
  };

  return (
    <div id="control">
      <h1>Items loaded: {count}</h1>

      <div>
        <h4>Jump to</h4>
        <input type="number" value={jumpToInput} onChange={jumpToChanged} />
      </div>
    </div>
  );
};

export default Control;
