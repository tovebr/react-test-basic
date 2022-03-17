import React, { useReducer, useCallback } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import "./App.css";

const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      console.log(state);
      let id1 = action.payload.id;
      let id2 = action.payload.id === "a" ? "b" : "a";

      return {
        [id1]:
          action.payload.oldColor === "lightpink" ? "aquamarine" : "lightpink",
        [id2]:
          action.payload.oldColor === "lightpink" ? "lightpink" : "aquamarine",
      };
    default:
      return { state };
  }
};

function App() {
  const [colorState, dispatch] = useReducer(colorReducer, {
    a: "aquamarine",
    b: "aquamarine",
  });

  console.log(colorState);

  const setNewColor = useCallback((oldColor, id) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: { oldColor, id },
    });
  }, []);

  return (
    <div className='App'>
      <ComponentA color={colorState.a} setNewColor={setNewColor} />
      <ComponentB color={colorState.b} setNewColor={setNewColor} />
    </div>
  );
}

export default App;
