import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 24px;
padding-bottom: 56px;
padding-left: 16px;
padding-right: 16px;
`

export const Logo = styled.h1`
font-weight: bold;
font-size: 32;
letter-spacing: -0.44px;
`

export const LinkCon = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;

  border: 1px solid #172339;
  border-radius: 6px;

  & > a {
    font-size: 14px;
    color: #172339;
    font-weight: bold;
    line-height: 1.71;
    letter-spacing: -0.14px;
  }
`;