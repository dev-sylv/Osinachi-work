import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div>
      <House>
        <Main>
          <Cont>
            <ul>
              <Sub>
                Udemy <Bus>business</Bus>
              </Sub>
              <Subo>Upskill your team with Udemy Business</Subo>
              <li>
                <Li>
                  {" "}
                  Unlimited access to 19,000+ top Udemy courses, anytime,
                  anywhere
                </Li>
              </li>
              <li>
                <Li>
                  {" "}
                  Unlimited access to 19,000+ top Udemy courses, anytime,
                  anywhere
                </Li>
              </li>
              <li>
                <Li>Top certifications in tech and business</Li>
              </li>
              <Vip>
                <Chlid>Get Udemy Business</Chlid>
                <Chlidone>Learn more</Chlidone>
              </Vip>
            </ul>
          </Cont>
          <Cont>vvv</Cont>
          {/* <Cont>vvv</Cont>
          <Cont>vvv</Cont> */}
        </Main>
      </House>
    </div>
  );
};

export default Section;
const Chlidone = styled.div`
  width: 40%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 18px;
  /* background-color: red; */
  border: 1px solid #000;
  font-weight: bold;

  :hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;
const Vip = styled.div`
  width: 70%;
  height: 80px;
  background-color: blue;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const Chlid = styled.div`
  width: 55%;
  height: 50px;
  background-color: #0e0909d3;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;

  :hover {
    background-color: rgb(00, 00, 00);
    cursor: pointer;
  }
`;
const Li = styled.div`
  font-size: 22px;
  color: #444;
`;
const Bus = styled.div`
  color: purple;
`;
const Subo = styled.div`
  font-size: 40px;
`;
const Sub = styled.div`
  display: flex;
  font-size: 30px;
`;
const House = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #ff0000; */
  justify-content: center;
  display: flex;
  align-items: center;
  object-fit: cover;
`;

const Main = styled.div`
  width: 90%;
  min-height: 100vh;
  background-color: #0000ff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  object-fit: cover;
`;

const Cont = styled.div`
  width: 40%;
  height: 500px;
  background-color: #000;
  object-fit: cover;

  /* align-items: center; */
`;
