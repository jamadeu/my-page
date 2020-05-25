import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  color: #fff;

  strong {
    font-size: 24px;
  }

  > p {
    margin-bottom: 8px;
  }
`;

export const Repositories = styled.div`
  display: grid;
  grid-template-columns: 316px 316px 316px;
  grid-auto-rows: 100px;
  gap: 10px;

  a {
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 4px 10px;
    color: #2f363d;
    text-decoration: none;

    &:hover {
      transform: scale(1.03);
    }

    span {
      color: #2f363d;
    }

    div {
      align-items: center;
      display: flex;
      font-size: 14px;
      margin-top: auto;

      svg {
        width: 24px;
        height: 24px;
      }

      p {
        color: #2f363d;
      }
    }
  }
`;
