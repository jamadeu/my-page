import React from 'react';
import { GoMail, GoMarkGithub, GoLocation } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import avatar from '../tmp/foto.jpeg';
import { Container } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <img src={avatar} alt="Jean Amadeu" />
        <strong>Jean Amadeu</strong>
        <span>Descrição</span>
        <nav>
          <a href="http://">
            <GoMarkGithub />
            <p>@jamadeu</p>
          </a>

          <a href="mailto:jean.amadeu2@gmail.com">
            <GoMail />
            <p>jean.amadeu2@gmail.com</p>
          </a>

          <a href="http://">
            <FaLinkedinIn />
            <p>Jean Amadeu</p>
          </a>
        </nav>
        <p>
          <GoLocation />
          Campinas-SP, Brasil
        </p>
      </Container>
    </>
  );
};

export default Header;
