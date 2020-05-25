import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 365px;
  width: 100vw;

  img {
    margin-top: 40px;
    margin-bottom: 8px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  nav {
    display: flex;
    line-height: 1px;

    a {
      align-items: center;
      display: flex;
      margin: 1px 10px;
      text-decoration: none;
      transition: scale 0.1s;

      svg {
        width: 18px;
        height: 18px;
        margin: 4px;
      }
      &:hover {
        filter: drop-shadow(0 0 1px black);
        transform: scale(1.2);
        text-decoration: underline;
      }
    }
  }

  p {
    font-size: 14px;
    svg {
      margin-right: 8px;
    }
  }
`;
