import styled from 'styled-components'

export const Header = styled.header`
  background: url('img/bg-pattern.svg') no-repeat;
  background-size: 100vw 50vh;
  height: 50vh;
  display: flex;
  justify-content: center;

  > div {
    background: url('img/pattern-circles.svg') no-repeat;
    background-position: 50% 12%;

    > div {
      margin: 52px auto 0;
      text-align: center;

      > p {
        margin-top: 10px;
      }
    }
  }
`
