import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    > section {
      background: #fff;
      box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
      width: 50%;
      position: relative;
      top: -6.2rem;
      ${media.lessThan('medium')`
        /* screen width is less than 768px (medium) */
        width: 90%;
      `}

      > article {
        padding: 40px;
        border-bottom: 1px solid #000;

        ${media.lessThan('medium')`
          /* screen width is less than 768px (medium) */
          padding: 20px;
        `}

        ${media.between('medium', 'large')`
          /* screen width is between 768px (medium) and 1170px (large) */
          padding: 20px;
        `}

        div.price-in-month-to-views {
          width: 100%;
          display: grid;
          grid-template-areas:
            'pageviews monthview'
            'range range';
          grid-template-columns: 1fr 1fr;
          align-items: center;

          ${media.lessThan('medium')`
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas: "pageviews" "range" "monthview";
            margin-bottom: 40px;
          `}

          p.page-count {
            text-transform: uppercase;
            grid-area: pageviews;
            ${media.lessThan('medium')`
              justify-self: center;
            `};
          }

          p.month {
            grid-area: monthview;
            justify-self: end;
            ${media.lessThan('medium')`
              justify-self: center;
            `};

            > span.price {
              font-size: 2rem;
              font-weight: ${theme.font.bold};
              color: ${theme.colors.neutral.darkDesaturatedBlue};
            }
          }
        }

        div.discount {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          ${media.lessThan('medium')`
            /* screen width is less than 768px (medium) */
            justify-content: center;
          `}

          p {
            margin: 0 15px;
            ${media.lessThan('medium')`
              /* screen width is less than 768px (medium) */
              display: flex;
              align-items: center;
            `}

            > span {
              color: ${theme.colors.primary.lightRed};
              font-weight: ${theme.font.bold};
              font-size: ${theme.font.sizes.small};
              margin-left: 10px;
              padding: 3px 6px;
              background: ${theme.colors.primary.lightGrayishRed};
              border-radius: 8px;

              ${media.lessThan('medium')`
                /* screen width is less than 768px (medium) */
                padding: 8px 6px;
                border-radius: 20px;
              `}
            }

            span.inner-discount {
              ${media.lessThan('medium')`
                /* screen width is less than 768px (medium) */
                display: none;
              `}

              ${media.between('medium', 'large')`
                /* screen width is between 768px (medium) and 1170px (large) */
                display: none;
              `}
            }
          }
        }
      }

      > footer {
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        ${media.lessThan('medium')`
          /* screen width is less than 768px (medium) */
          justify-content: center;
        `}

        ${media.between('medium', 'large')`
          /* screen width is between 768px (medium) and 1170px (large) */
          padding: 20px 20px;
        `}


        ul > li {
          margin: 15px 0;
          display: flex;
          align-items: center;
          ${media.lessThan('medium')`
            /* screen width is less than 768px (medium) */
            justify-content: center;
          `}

          > svg {
            margin-right: 10px;
            color: ${theme.colors.primary.strongCyan};
          }
        }

        button {
          cursor: pointer;
          border: none;
          border-radius: 20px;
          background: ${theme.colors.neutral.darkDesaturatedBlue};
          color: ${theme.colors.neutral.lightGrayishBlue};
          padding: 14px 46px;
        }
      }
    }
  `};
`

export const Ranger = styled.input.attrs({
  type: 'range',
  min: 8,
  max: 36
})`
  width: 100%;
  margin: 40px 0;
  border-radius: 18px;
  height: 10px;

  grid-area: range;

  ${({ theme }) => css`
    -webkit-appearance: none;
    background: ${theme.colors.primary.softCyan};

    ::-webkit-slider-thumb {
      width: 30px;
      -webkit-appearance: none;
      padding: 19px;
      cursor: pointer;
      background: url('img/icon-slider.svg') no-repeat;
      background-position: 50%;
      border-radius: 100%;
      background-color: ${theme.colors.primary.strongCyan};
      border: none;
      position: relative;
      top: -140%;

      &:active {
        background-color: ${theme.colors.primary.softCyan};
      }
    }

    ::-webkit-slider-runnable-track {
      background-color: ${theme.colors.primary.softCyan};
      height: 100%;
      border-radius: 18px;
      -webkit-appearance: none;
    }

    :focus {
      outline: none;
    }

    ::-moz-range-thumb {
      width: 30px;
      -webkit-appearance: none;
      padding: 12px 4px;
      cursor: pointer;
      background: url('img/icon-slider.svg') no-repeat;
      background-position: 50%;
      border-radius: 100%;
      background-color: ${theme.colors.primary.strongCyan};
      border: none;

      &:active {
        background-color: ${theme.colors.primary.softCyan};
      }
    }

    ::-moz-range-progress {
      background: ${theme.colors.primary.softCyan};
      height: 100%;
      border-radius: 18px;
    }

    ::-moz-range-track {
      background-color: #d3d3d3;
      height: 100%;
      border-radius: 18px;
    }

    ::-ms-thumb {
      width: 30px;
      -webkit-appearance: none;
      padding: 12px 4px;
      cursor: pointer;
      background: url('img/icon-slider.svg') no-repeat;
      background-position: 50%;
      border-radius: 100%;
      background-color: ${theme.colors.primary.strongCyan};
      border: none;

      &:active {
        background-color: ${theme.colors.primary.softCyan};
      }
    }

    ::-ms-fill-lower {
      background: ${theme.colors.primary.softCyan};
      height: 100%;
      border-radius: 18px;
    }

    ::-ms-fill-upper {
      background-color: #d3d3d3;
      height: 100%;
      border-radius: 18px;
    }
  `};
`
