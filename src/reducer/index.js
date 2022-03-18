export const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      let id1 = action.payload.id;
      let id2 = id1 === "a" ? "b" : "a";
      console.log(state);
      return {
        ...state,
        [id1]:
          action.payload.oldColor === "lightpink" ? "aquamarine" : "lightpink",
        [id2]:
          action.payload.oldColor === "lightpink" ? "lightpink" : "aquamarine",
      };
    case "UPDATE_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    default:
      return { state };
  }
};
