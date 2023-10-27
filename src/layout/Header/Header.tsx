import * as SC from "./HeaderStyled"

const Header:React.FC = () => {
    return (
      <SC.HeaderStyled>
        <SC.Logo>suite</SC.Logo>
        <SC.LinkCon>
          <a
            href="https://portfolio-aleks-berd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Request Beta Access
          </a>
        </SC.LinkCon>
      </SC.HeaderStyled>
    );
}
 
export default Header;