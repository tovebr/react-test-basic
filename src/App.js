import React, { useReducer, useCallback, useEffect } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import "./App.css";

const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      let id1 = action.payload.id;
      let id2 = id1 === "a" ? "b" : "a";

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
  const [colorState, dispatch] = useReducer(colorReducer, {}, () => {
    const localColors = localStorage.getItem("colors");
    return localColors
      ? JSON.parse(localColors)
      : { a: "aquamarine", b: "aquamarine" };
  });

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorState));
  }, [colorState]);

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
