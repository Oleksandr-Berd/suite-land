import * as SC from "./FooterStyled"

import {ReactComponent as FbMob} from "../../assets/images/fb_mob.svg"
import { ReactComponent as TwitterMob } from "../../assets/images/twitter_mob.svg";
import { ReactComponent as InstaMob } from "../../assets/images/insta_mob.svg";


const Footer:React.FC = () => {
    return (
      <SC.FooterStyled>
        <SC.Title>suite</SC.Title>
        <SC.Copyright>Copyright - Suite</SC.Copyright>
        <SC.SocNetList>
          <SC.SocNetItem>
            <FbMob/>
          </SC.SocNetItem>
          <SC.SocNetItem>
            <TwitterMob/>
          </SC.SocNetItem>
          <SC.SocNetItem>
            <InstaMob/>
          </SC.SocNetItem>
        </SC.SocNetList>
      </SC.FooterStyled>
    );
}
 
export default Footer;