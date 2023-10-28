import styled from "@emotion/styled";

type Props = {
    aboutPic:string,
}

export const CommonCon = styled.div<Props>`
position: relative;

  padding-top: 261px;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;

  background-color: #172339;

  &::before {
    content: url(${(props) => props.aboutPic});

    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(-180px);
  }
`;

export const Title = styled.h2`
  margin-top: 37px;
  margin-bottom: 40px;

  color: #faf8f6;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.42px;
  font-weight: bold;
`;

export const Text = styled.p`
  margin-bottom: 40px;

  color: #f3ede7;
  font-size: 18px;
  line-height: 1.78;
  letter-spacing: 0.09px;
`;

export const Signature = styled.h3`
  text-transform: uppercase;
  color: #FAF8F6;
  font-size: 18px;
  line-height: 1.78;
  letter-spacing: -0.18px;
`;

export const SignatureText = styled.p`
  color: #f3ede7;
  font-size: 16px;
  line-height: 1.63;
letter-spacing: 2.5px;
`;