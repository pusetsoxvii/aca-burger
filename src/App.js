import React, { useState } from "react";

const breadStyle = {
  background: "#FAA61A",
  height: 60,
  width: "100%",
  margin: "0 auto",
};
const fillingBase = {
  height: 54,
  width: "100%",
  margin: "0 auto",
  marginBottom: 17,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: 20,
  fontWeight: 400,
  borderRadius: 8,
};

// Individual components
function TopBread() {
  return (
    <div
      style={{
        ...breadStyle,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 17,
      }}
    />
  );
}

function BaseBread() {
  return (
    <div
      style={{
        ...breadStyle,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        marginTop: 17,
      }}
    />
  );
}

function Tomato() {
  return (
    <div style={{ ...fillingBase, background: "#FF3300" }}>
      Tomato
    </div>
  );
}

function Meat() {
  return (
    <div style={{ ...fillingBase, background: "#7B3F00" }}>
      Meat
    </div>
  );
}

function Lettuce() {
  return (
    <div style={{ ...fillingBase, background: "#007000" }}>
      Lettuce
    </div>
  );
}

// Main burger app
function App() {
<<<<<<< HEAD
=======
  // our customer can choose fillings
>>>>>>> 79aa68b0658f1846d0c8e0280f76a3f48c8e6416
  const [showTomato, setShowTomato] = useState(true);
  const [showMeat, setShowMeat] = useState(true);
  const [showLettuce, setShowLettuce] = useState(true);

  return (
    <div
      style={{
        width: 480,
        maxWidth: "96vw",
        margin: "32px auto",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: 38, marginBottom: 16 }}>
        ACA Burger
      </h1>
      <div style={{ marginBottom: 25 }}>
        <label>
          <input
            type="checkbox"
            checked={showTomato}
            onChange={() => setShowTomato((v) => !v)}
          />{" "}
          Tomato
        </label>
        <label style={{ marginLeft: 18 }}>
          <input
            type="checkbox"
            checked={showMeat}
            onChange={() => setShowMeat((v) => !v)}
          />{" "}
          Meat
        </label>
        <label style={{ marginLeft: 18 }}>
          <input
            type="checkbox"
            checked={showLettuce}
            onChange={() => setShowLettuce((v) => !v)}
          />{" "}
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
