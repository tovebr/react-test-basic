import React, { useReducer, useCallback, useEffect } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import "./App.css";

const appReducer = (state, action) => {
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

function App() {
  const [appState, dispatch] = useReducer(appReducer, {}, () => {
    const localAppState = localStorage.getItem("appState");
    return localAppState
      ? JSON.parse(localAppState)
      : { a: "aquamarine", b: "aquamarine", text: "" };
  });

  console.log(appState);

  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(appState));
  }, [appState]);

  const setNewColor = useCallback((oldColor, id) => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: { oldColor, id },
    });
  }, []);

  const setNewText = useCallback((text) => {
    dispatch({
      type: "UPDATE_TEXT",
      payload: text,
    });
  }, []);

  return (
    <div className='App'>
      <ComponentA
        color={appState.a}
        setNewColor={setNewColor}
        setNewText={setNewText}
        text={appState.text}
      />
      <ComponentB
        color={appState.b}
        setNewColor={setNewColor}
        text={appState.text}
      />
    </div>
  );
}

export default App;
