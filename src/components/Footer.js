import { FooterStyled, FooterItem } from "../styles/footer-styling";

const Footer = () => (
  <FooterStyled>
    <FooterItem>
      <h2>An App was made by Matthew Kryuchkov</h2>
    </FooterItem>
    <FooterItem>
      Telegram:{" "}
      <a href="http://t.me/MatHook" target="_blank" rel="noopener noreferrer">
        MatHook
      </a>
    </FooterItem>
  </FooterStyled>
);

export default Footer;
