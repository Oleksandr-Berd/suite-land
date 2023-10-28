import { useMediaQuery } from "usehooks-ts";

import * as SC from "./AboutStyled";

import { ReactComponent as HalfOval } from "../../assets/images/about_mob.svg";
import picDesk from "../../assets/images/about_pic_desk.svg"
import aboutPic from "../../assets/images/about_image_mob.svg";
import aboutPicTab from "../../assets/images/about_tab.svg";

const About = () => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <SC.CommonCon
      aboutPic={isDesktop ? picDesk : isTablet ? aboutPicTab : aboutPic}
    >
      <HalfOval />
      {isDesktop ? (
        <SC.DeskCon>
          <SC.Title>
            It just <span>works.</span>
          </SC.Title>
          <SC.Text>
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </SC.Text>
          <SC.Signature>jeremy robinson</SC.Signature>
          <SC.SignatureText>CMO, FYLO</SC.SignatureText>
        </SC.DeskCon>
      ) : (
        <>
          <SC.Title>
            It just <span>works.</span>
          </SC.Title>
          <SC.Text>
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </SC.Text>
          <SC.Signature>jeremy robinson</SC.Signature>
          <SC.SignatureText>CMO, FYLO</SC.SignatureText>
        </>
      )}
    </SC.CommonCon>
  );
};

export default About;
