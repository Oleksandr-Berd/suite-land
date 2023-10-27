import {ReactComponent as OvalMob} from "../../assets/images/intro_oval_mob.svg"
import { ReactComponent as PictureMob } from "../../assets/images/intro_image_mob.svg";


const Intro:React.FC = () => {
    return (
      <div>
        <div>
          <OvalMob />
          <h2>
            A <span>super solution</span> for your <span>business.</span>
          </h2>
          <p>
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <div>
            <a
              href="https://portfolio-aleks-berd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Request Beta Access
            </a>
          </div>
        </div>
        <PictureMob />

        <ul>
          <li>
            <h3>2K+</h3>
            <p>companies</p>
          </li>
          <li>
            <h3>8</h3>
            <p>languages</p>
          </li>
          <li>
            <h3>1.2M</h3>
            <p>leads</p>
          </li>
        </ul>
      </div>
    );
}
 
export default Intro;