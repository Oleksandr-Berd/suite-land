import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 24px;
  padding-bottom: 83px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-left: 39px;
    padding-right: 40px;
    padding-bottom: 80px;
  }
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: 32;
  letter-spacing: -0.44px;
`;

export const LinkCon = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;

  border: 1px solid #172339;
  border-radius: 6px;

  @media (min-width: 768px){
    padding-left: 24px;
    padding-right: 24px;
  }

  & > a {
    font-size: 14px;
    color: #172339;
    font-weight: bold;
    line-height: 1.71;
    letter-spacing: -0.14px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 2;
      letter-spacing: -0.16px;
    }
  }
`;
