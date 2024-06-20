import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 80px 0 0 0;
  padding: 0;

  .gallerySwiper {
    width: 100%;
    padding: 50px 0;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }

  .swiperSlide {
    position: relative;
    width: 500px;
    height: 500px;
    transition: opacity 0.5s;

    &:not(.swiper-slide-active) {
      filter: blur(5px);
    }

    img {
      width: 100%;
      object-fit: contain;
      -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0006);
    }
  }
`;

export const ContentBox = styled.div<{ isFront: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: 0.6s;
  color: white;
  cursor: ${(props) => (props.isFront ? 'pointer' : 'default')};

  * {
    transform: translateY(25px);
    transition: transform 0.6s;
  }

  &:hover {
    ${(props) =>
      props.isFront &&
      `
      opacity: 1;
      transform: scale(1.1);

      * {
        transform: translateY(0px);
      }
    `}
  }

  p {
    word-break: break-word;
  }
`;

export const BtnBlock = styled.div`
    width : 100%;
    position: absolute;
    bottom: 30px;
    left : 0;
    display: flex;
    justify-content : space-between;
    gap: 20px;
    padding : 0 300px;
    z-index : 11;
`;

export const Btn = styled.button`
  cursor: pointer;
`;