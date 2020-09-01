import {
  ASSERT_SET_OF_ITEMS,
  JUMP_TO_NEW,
  JUMP_TO_EXISTS,
  EDIT_MODE,
} from "../action-types";
import { ASSERT_AMOUNT } from "../../constants/";

import createSet from "../../functions/createSet";

export const initializeAllRows = () => (dispatch) => {
  const assertItems = () => {
    const randomStringsSet = createSet(ASSERT_AMOUNT);
    dispatch({
      type: ASSERT_SET_OF_ITEMS,
      payload: randomStringsSet,
    });
  };

  assertItems();
};

export const getNewBatch = () => (dispatch, getState) => {
  const assertItems = () => {
    const allItemsState = getState().list.allItems;
    const lastIndex = allItemsState[allItemsState.length - 1].index;

    const randomStringsSet = createSet(ASSERT_AMOUNT, lastIndex);
    dispatch({
      type: ASSERT_SET_OF_ITEMS,
      payload: randomStringsSet,
    });
  };

  assertItems();
};

export const jumpTo = (index = 0) => (dispatch, getState) => {
  const state = getState().list;
  const alreadyExists = state.allItems.find(
    (listItem) => listItem.index === index
  );

  if (!alreadyExists) {
    const stringForThisIndex = createSet(1, index);

    dispatch({
      type: JUMP_TO_NEW,
      payload: { item: stringForThisIndex[0] },
    });
  } else {
    dispatch({
      type: JUMP_TO_EXISTS,
      payload: alreadyExists,
    });
  }
};

export const enterEditMode = (index) => (dispatch) => {
  dispatch({
    type: EDIT_MODE,
    payload: index,
  });
};
