import React, { useState, useEffect } from 'react';
import { GoMail, GoMarkGithub, GoLocation } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';
import api from '../services/api';

const Header = () => {
  const [owner, setOwner] = useState({});

  useEffect(() => {
    api.get().then((response) => {
      setOwner(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <img src={owner.avatar_url} alt="Jean Amadeu" />
        <strong>Jean Amadeu</strong>
        <span>{owner.bio}</span>
        <nav>
          <a href={owner.html_url}>
            <GoMarkGithub />
            <p>@jamadeu</p>
          </a>

          <a href="mailto:jean.amadeu2@gmail.com">
            <GoMail />
            <p>jean.amadeu2@gmail.com</p>
          </a>

          <a href="https://www.linkedin.com/in/jeanamadeu">
            <FaLinkedinIn />
            <p>Jean Amadeu</p>
          </a>
        </nav>
        <p>
          <GoLocation />
          {owner.location}
        </p>
      </Container>
    </>
  );
};

export default Header;
