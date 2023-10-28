import { useMediaQuery } from "usehooks-ts";

import * as SC from "./IntroStyled";

import { ReactComponent as OvalMob } from "../../assets/images/intro_oval_mob.svg";
import { ReactComponent as PictureMob } from "../../assets/images/intro_image_mob.svg";

const Intro: React.FC = () => {
  const isMobile = useMediaQuery("max-width:767px");

  return (
    <SC.CommonCon>
      <SC.ContentCon>
        <OvalMob />
        <SC.Title>
          A <span>super solution</span> for your <span>business.</span>
        </SC.Title>
        <SC.Paragraph>
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </SC.Paragraph>
        <SC.LinkCon>
          <a
            href="https://portfolio-aleks-berd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Request Beta Access
          </a>
        </SC.LinkCon>
      </SC.ContentCon>
      <SC.PictureCon>
        <PictureMob />
      </SC.PictureCon>
      <SC.AdvList>
        <SC.AdvItem>
          <SC.AdvTitle>2K+</SC.AdvTitle>
          <SC.AdvText>companies</SC.AdvText>
        </SC.AdvItem>
        <SC.AdvItem>
          <SC.AdvTitle>8</SC.AdvTitle>
          <SC.AdvText>languages</SC.AdvText>
        </SC.AdvItem>
        <SC.AdvItem>
          <SC.AdvTitle>1.2M</SC.AdvTitle>
          <SC.AdvText>leads</SC.AdvText>
        </SC.AdvItem>
      </SC.AdvList>
    </SC.CommonCon>
  );
};

export default Intro;
