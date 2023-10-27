import styled from "@emotion/styled";

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 237px;
`;

export const ContentCon = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 0;
    right: 0;

    transform: translateY(-25px) translateX(-38px);
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;

  color: #172339;
  font-size: 38px;
  line-height: 1.16;
  letter-spacing: -0.53px;
  font-weight: normal;

  & > span {
    font-weight: bold;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;

  color: #49566d;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.09px;
`;

export const LinkCon = styled.div`
  display: inline-block;

  margin-bottom: 56px;

  padding-left: 32px;
  padding-right: 32px;
  padding-top: 15px;
  padding-bottom: 15px;

  background-color: #172339;

  border-radius: 6px;

  & > a {
    color: #faf8f6;
  }
`;

export const AdvList = styled.ul`
margin-top: 56px;

text-align: center;
`

export const AdvItem = styled.li`
&:not(:last-child){
    margin-bottom: 32px;
}
`

export const AdvTitle = styled.h3`
margin-bottom: 1px;

font-size: 48px;
line-height: 1.67;
font-weight: bold;
`

export const AdvText = styled.p`
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #49566d;
`;