import { useState } from "react";
import AddButton from "./components/AddButton";
import Select from "./components/Select";
import Input from "./components/Input";
import ChooseList from "./components/ChooseList";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AddButton></AddButton>
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "end" }}>
          <Select></Select>
          <Input></Input>
        </div>
        <StudentsList></StudentsList>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ChooseList></ChooseList>
        </div>
      </div>
    </>
  );
}

export default App;
