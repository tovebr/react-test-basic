import React, { useReducer, useCallback, useEffect } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import { appReducer } from "./reducer";
import "./App.css";

// As you can see I'm on a slippery slope towards bad practice.
// I wish i hade started out with useState, i dont really have
// coverage for useReduce or useContext. it kinda got out of
// hand when i needed to add the text-property to state and
// now i've got a reducer handling all data...
// Im inbetween redux and useState knowledgewise so i don't
// know what the best way to organize the code is.
// But it works so thats neat!

function App() {
  const [appState, dispatch] = useReducer(appReducer, {}, () => {
    const localAppState = localStorage.getItem("appState");
    return localAppState
      ? JSON.parse(localAppState)
      : { a: "aquamarine", b: "aquamarine", text: "" };
  });

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
