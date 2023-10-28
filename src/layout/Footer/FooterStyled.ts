import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  padding-top: 56px;
  padding-bottom: 80px;

  text-align: center;
  background-color: #f3ede7;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 536px;
    padding-bottom: 72px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1440px){
    padding-top: 360px;
    padding-left: 167px;
    padding-right: 167px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 33px;

  color: #172339;
  font-weight: bold;
  font-size: 32;
  letter-spacing: -0.44px;

  @media (min-width: 768px){
    margin: 0;
  }
`;

export const Copyright = styled.p`
  margin-bottom: 33px;

  color: #49566d;
  font-size: 15px;
  line-height: 2.14;
  letter-spacing: 0.08px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const SocNetList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SocNetItem = styled.li`
  &:not(:last-child) {
    margin-right: 28px;
  }
`;
