import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  padding-top: 56px;
  padding-bottom: 80px;

  text-align: center;
  background-color: #f3ede7;
`;

export const Title = styled.h1`
  margin-bottom: 33px;

  color: #172339;
  font-weight: bold;
  font-size: 32;
  letter-spacing: -0.44px;
`;

export const Copyright = styled.p`

  margin-bottom: 33px;

  color: #49566d;
  font-size: 15px;
  line-height: 2.14;
  letter-spacing: 0.08px;
`;

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const SocNetItem = styled.li`
&:not(:last-child){
    margin-right: 28px;
}
`
