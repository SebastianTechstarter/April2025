import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  // Klickerzähler
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function reset () {
    setCount(0)
  };

  // useEffect beim ersten Laden
  useEffect(() => {
    console.log("App wurde geladen. Herzlich Willkommen!");
 

  // Sekundentimer
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 0.5)
    }, 1000)
  }, []);

  // Darkmode/Lightmode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <h1>Hier machen wir Hook-Übungen :-)</h1>
      <div>Seite ist seit {seconds} Sekunden geöffnet.</div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div style={{marginTop: "2rem"}}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={reset}>Reset</button>
        <div>Deine Lieblingszahl ist also {count}</div>
      </div>
    </div>
  );
}

export default App;
