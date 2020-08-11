import styled, { css } from 'styled-components';
import { WrapperThumb, Background } from '../ThumbCute/styles';
import arrow from '../../assets/img/arrow.svg';

const thumbWidth = 400;
const spaceRight = 25;
const spaceRightLeft = 30;

export const WrapperCarousel = styled.div`
  --space-right: ${spaceRight}rem;
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: var(--space-right);
  }
`;

const Arrow = css`
  position: absolute;
  height: calc(100% - var(--space-top) * 2);
  width: 50rem;
  opacity: 0;
  border: none;
  background-color: var(--color-video-3);
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;
  z-index: 1;

  &::after {
    content: url(${arrow});
    display: inline-block;
    opacity: 1;
    transition: transform 100ms linear;
  }
`;

export const Right = styled.button`
  ${Arrow};
  right: 0;

  &::after {transform: rotate(180deg);}

  &:hover::after {
    transform: scale(1.2) rotate(180deg);
  }

  &:active::after {
    transform: rotate(180deg) scale(1.2) translateX(-4rem);
  }
`;

export const Left = styled.button`
  ${Arrow};
  left: 0;

  &:hover::after {
    transform: scale(1.2) ;
  }

  &:active::after {
    transform: scale(1.2) translateX(-4rem);
  }
`;

const moveCarousel = (move, moveLastThumb) => {
  const oneStep = (thumbWidth + spaceRight) * move;
  const lastStep = (moveLastThumb + spaceRightLeft) * -1;
  if (oneStep !== 0 && oneStep < lastStep) {
    return css`
      & > ${WrapperCarousel} {
        transform: translateX(${lastStep}px);
      }

      &:hover > ${Right} {
        display: none;
        opacity: 0;
      }
    `;
  }
  return css`
    & > ${WrapperCarousel} {
      transform: translateX(${oneStep}px);
    }
  `;
};

const leftShow = (move) => move < 0;

export const CarouselStyle = styled.div`
  --space-top: 20rem;
  --thumb-width: ${thumbWidth}rem;
  --space-right-left: ${spaceRightLeft}rem;

  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding: var(--space-top) var(--space-right-left);
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
    box-sizing: border-box;
  }

  &:hover > ${Right} {
    display: block;
    opacity: 0.5;
  }

  &:hover > ${Left} {
    ${({ move }) => (leftShow(move)
    ? css`
      display: block;
      opacity: 0.5;
    `
    : css`
      display: none;
      opacity: 0;
    `)}
  }

  & > ${Right}:hover {
    transform-origin: right center;
    opacity: 0.7;
  }

  & > ${Right}:focus, & > ${Left}:focus {
    outline: none;
  }

  ${({ move, moveLastThumb }) => moveCarousel(move, moveLastThumb)}
`;
