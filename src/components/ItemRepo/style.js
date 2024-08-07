import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #efefef;
    margin-bottom: 20px;
  }

  .btn-wrapper {
    display: flex;
    gap: 16px;
    margin-block: 40px;
  }

  a {
    background: #eee;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    text-decoration: none;
    color: #222;

    &:hover {
      opacity:.9;
    }
  }

  a.remove {
    background: red;
    color: #ffffff;
  }

  hr {
    color: #efefef;
    margin: 20px 0;
  }
`