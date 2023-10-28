import styled from "@emotion/styled";

type Props = {
    introPic: string,
}

export const CommonCon = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 237px;

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-bottom: 273px;

   
  }
`;

export const ContentCon = styled.div<Props>`
  position: relative;

  & > svg {
    position: absolute;
    top: 0;
    right: 0;

    transform: translateY(-45px) translateX(-118px);
  }

  @media (min-width: 768px) {
    width: 573px;

    text-align: left;

    &::after {
      content: url(${(props) => props.introPic});
      position: absolute;
      top: 0;
      right: 0;
      z-index: -5;

      transform: translateX(115px) translateY(-100px);
    }
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

  @media (min-width: 768px) {
    width: 500px;

    margin-bottom: 40px;

    font-size: 56px;
    line-height: 1.14;
    letter-spacing: -0.78px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;

  color: #49566d;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.09px;

  @media (min-width: 768px) {
    width: 350px;

    margin-bottom: 40px;
  }
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
    font-size: 18px;
    line-height: 1.78;
    letter-spacing: -0.18px;
  }
`;

export const AdvList = styled.ul`
  margin-top: 56px;

  text-align: center;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const AdvItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;

    @media (min-width: 768px){
        margin-bottom: 0;
        margin-right: 10px;
    }
  }
`;

export const AdvTitle = styled.h3`
  margin-bottom: 1px;

  font-size: 48px;
  line-height: 1.67;
  font-weight: bold;
`;

export const AdvText = styled.p`
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #49566d;
`;

export const PictureCon = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
