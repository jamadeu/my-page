import React, { useState, useEffect } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Container, Repositories } from './styles';
import repos from '../tmp/repos';
import languageColor from '../util/languageColor';

const Body = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const sortedRepos = repos.sort((a, b) => {
      if (a.updated_at > b.updated_at) {
        return -1;
      }
      if (b.updated_at > a.updated_at) {
        return 1;
      }
      return 0;
    });

    setRepositories(sortedRepos);
  }, []);

  return (
    <Container>
      <strong>Projetos</strong>
      <p>Projetos que criei e/ou participei</p>
      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.id} href={repo.html_url}>
            {repo.full_name}
            {repo.description && <span>{repo.description}</span>}
            <div>
              <GoPrimitiveDot color={languageColor[repo.language]} />
              <p>{repo.language}</p>
            </div>
          </a>
        ))}
      </Repositories>
    </Container>
  );
};

export default Body;
