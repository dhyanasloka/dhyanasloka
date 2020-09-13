import React from 'react';
import { Button } from '../../globalStyles';
import {
    FooterContainer, FooterSubscription, FooterSubtext, Form, FormInput,
    FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
    FooterLink,
    SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import dslogo from '../../images/logo.png';
function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                Please Subscribe to our YouTube Channel "Dhyana Sloka" and
                receive Devotional videos
        </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/videos">Videos</FooterLink>
                        <FooterLink to="/articles">Articles</FooterLink>

                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon src={dslogo} width={70} height={52}/>
            DHYANA SLOKA
          </SocialLogo>
          <WebsiteRights>DHYANA SLOKA © 2020</WebsiteRights>
          </SocialMediaWrap>
          </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;