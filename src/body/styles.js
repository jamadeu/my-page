import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  strong {
    font-size: 24px;
  }
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: 316px 316px 316px;
  grid-auto-rows: 130px;
  gap: 10px;

  * {
    color: #2f363d;
    text-decoration: none;
  }

  a {
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 4px 10px;

    div {
      display: flex;
    }
  }
`;
