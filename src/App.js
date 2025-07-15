import React, { useState } from "react";

function TopBread() {
  return (
    <div style={{
      background: "#FAA61A",
      height: 60,
      borderRadius: "28px 28px 15px 15px",
      margin: "14px 0"
    }} />
  );
}

function Tomato() {
  return (
    <div style={{
      background: "#FF3300",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 22,
      marginBottom: 7
    }}>
      Tomato
    </div>
  );
}

function Meat() {
  return (
    <div style={{
      background: "#7B3F00",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 22,
      marginBottom: 7
    }}>
      Meat
    </div>
  );
}

function Lettuce() {
  return (
    <div style={{
      background: "#007000",
      height: 43,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: 22,
      marginBottom: 7
    }}>
      Lettuce
    </div>
  );
}

function BaseBread() {
  return (
    <div style={{
      background: "#FAA61A",
      height: 60,
      borderRadius: "15px 15px 28px 28px",
      margin: "14px 0"
    }} />
  );
}

function App() {
  // our customer can choose fillings
  const [showTomato, setShowTomato] = useState(true);
  const [showMeat, setShowMeat] = useState(true);
  const [showLettuce, setShowLettuce] = useState(true);

  return (
    <div style={{ width: 410, margin: "38px auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold" }}>ACA Burger</h1>
      <div style={{ marginBottom: 18 }}>
        <label>
          <input type="checkbox" checked={showTomato} onChange={() => setShowTomato(v => !v)} />
          Tomato
        </label>
        <label style={{ marginLeft: 14 }}>
          <input type="checkbox" checked={showMeat} onChange={() => setShowMeat(v => !v)} />
          Meat
        </label>
        <label style={{ marginLeft: 14 }}>
          <input type="checkbox" checked={showLettuce} onChange={() => setShowLettuce(v => !v)} />
          Lettuce
        </label>
      </div>
      <TopBread />
      {showTomato && <Tomato />}
      {showMeat && <Meat />}
      {showLettuce && <Lettuce />}
      <BaseBread />
    </div>
  );
}

export default App;
