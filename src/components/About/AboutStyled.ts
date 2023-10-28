import styled from "@emotion/styled";

type Props = {
  aboutPic: string | null;
};

export const CommonCon = styled.div<Props>`
  position: relative;

  padding-top: 261px;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;

  background-color: #172339;

  border-radius: 15px;

  &::before {
    content: url(${(props) => props.aboutPic});

    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(-180px);

    @media (min-width: 768px) {
      transform: translateX(220px) translateY(-180px);
    }

    @media (min-width: 1440px) {
      transform: translateX(100px) translateY(-55px);
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(1000px);

    margin-left: 39px;
    margin-right: 40px;
  }

  @media (min-width: 1440px) {
    transform: translateY(800px);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    padding-top: 48px;
    padding-bottom: 68px;
    padding-right: 125px;
    padding-left: 517px;

    margin-left: 167px;
    margin-right: 164px;
  }
`;

export const Title = styled.h2`
  margin-top: 37px;
  margin-bottom: 40px;

  color: #faf8f6;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.42px;
  font-weight: normal;

  & > span {
    font-weight: bold;
  }

  @media (min-width: 1440px){
    font-size: 48px;
    line-height: 1.67;
    letter-spacing: -0.5px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;

  color: #f3ede7;
  font-size: 18px;
  line-height: 1.78;
  letter-spacing: 0.09px;

  @media (min-width: 1440px){
    font-size: 20px;
    line-height: 1.75;
  }
`;

export const Signature = styled.h3`
  text-transform: uppercase;
  color: #faf8f6;
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

export const DeskCon = styled.div`
  width: 350px;

  margin-left: 53px;

  text-align: left;
`;
