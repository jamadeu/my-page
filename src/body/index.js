import React, { useState, useEffect } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Container, Repositories } from './styles';
// import repos from '../tmp/repos';
import languageColor from '../util/languageColor';
import api from '../services/api';

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const [sortedRepositories, setSortedRepositories] = useState([]);

  useEffect(() => {
    api.get('/repos').then((response) => {
      setRepositories(response.data);
    });

    const sortedRepos = repositories.sort((a, b) => {
      if (a.updated_at > b.updated_at) {
        return -1;
      }
      if (b.updated_at > a.updated_at) {
        return 1;
      }
      return 0;
    });
    setSortedRepositories(sortedRepos);
  }, [repositories]);

  return (
    <Container>
      <strong>Projetos</strong>
      <p>Projetos que criei e/ou participei</p>
      <Repositories>
        {sortedRepositories.map((repo) => (
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
