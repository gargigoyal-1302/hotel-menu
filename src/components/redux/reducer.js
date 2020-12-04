import { ADD_ITEM, REMOVE_ITEM } from "./actionType";
const initialState = {
  items: [],
  totalAmount: 0,
  loading: true,
  error: false,
};

const Reducer = (state = initialState, action) => {
  let newItems;
  switch (action.type) {
    case ADD_ITEM:
      newItems = state.items;
      console.log(newItems);
      newItems.map((item) => {
        if (item.itemName === action.payload.itemName) {
          return (item.itemCount += 1);
        }
        return newItems.push(action.payload);
      });
      return {
        ...state,
        items: [newItems],
        totalAmount: state.totalAmount + action.payload.price,
        loading: false,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default Reducer;
