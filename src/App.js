import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
};

export default App;

const Div = styled.div``;
