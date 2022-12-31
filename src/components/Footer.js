import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';



function Footer() {
  return (
    <div className="Footer">
        <div className="socialMedia">
            <LinkedInIcon /> <TwitterIcon /> <InstagramIcon />
        </div>
        <p>&copy; 2022 cascadehealth.com</p>
    </div>
  );
};

export default Footer;