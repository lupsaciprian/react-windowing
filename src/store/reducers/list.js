import {
  ASSERT_SET_OF_ITEMS,
  JUMP_TO_EXISTS,
  JUMP_TO_NEW,
  EDIT_MODE,
} from "../action-types";

const INITIAL_STATE = {
  allItems: [],
  viewItems: [],
  editingIndex: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ASSERT_SET_OF_ITEMS:
      return {
        ...state,
        allItems: [...state.allItems, ...payload],
        viewItems: [...payload],
      };
    case JUMP_TO_NEW:
      return {
        ...state,
        allItems: [...state.allItems, payload.item],
        viewItems: [payload.item],
      };
    case JUMP_TO_EXISTS:
      return {
        ...state,
        viewItems: [payload],
      };
    case EDIT_MODE:
      return {
        ...state,
        editingIndex: payload,
      };
    default:
      return state;
  }
};
