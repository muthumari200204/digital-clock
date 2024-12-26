import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatTime = (time) => time.toLocaleTimeString(); 
  const formatDate = (time) =>
    new Intl.DateTimeFormat("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(time);

  const styles = {
    container: { textAlign: "center", marginTop: "50px", Color: "white", height: "40vh" },
    heading: { fontSize: "36px", fontFamily: "Arial", fontWeight: "bold", marginBottom: "20px" },
    clock: { fontSize: "48px", fontFamily: "monospace", marginBottom: "10px" , color: "white"},
    date: { fontSize: "24px", fontFamily: "Arial", fontStyle: "italic", color: "white "},
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Digital Clock</h1>
      <h2 style={styles.clock}>{formatTime(time)}</h2>
      <p style={styles.date}>{formatDate(time)}</p>
    </div>
  );
};

export default App;


