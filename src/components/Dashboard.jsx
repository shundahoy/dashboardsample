import React from "react";
import { IoAnalytics } from "react-icons/io5";
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Profile from "./Profile";
import Transfers from "./Transfers";
import Earnings from "./Earnings";
import Analytics from "./Analytics";
const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      height:50%;
      gap:1rem;
    }
    .row__two {
      display;grid;
      grid-template-colums:repeat(3,1fr);
      height:50%;
      gap:1rem;
    }
  }
`;
