import React from "react";
import { IoAnalytics } from "react-icons/io5";
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Profile from "./Profile";
import Transfers from "./Transfers";
import Earnings from "./Earnings";
const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <IoAnalytics />
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
`;
