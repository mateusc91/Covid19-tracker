import React from "react";
import { MDBContainer } from "mdbreact";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './Footer.module.css'
const FooterPage = () => {
  return (
    <div className={styles.footer}>
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright : Mateus Cesar
        </MDBContainer>
      <IconButton className={styles.icons} aria-label="https://www.linkedin.com/in/mateus-cesar-3a444652/" onClick={() => window.open('https://www.Linkedin.com')}>
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton className={styles.icons} aria-label="https://github.com/mateusc91" onClick={() => window.open('https://github.com/mateusc91')}>
        <GitHubIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default FooterPage;