import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  height : 100vh;
  display : flex;
  align-items : center;
  justify-content : center;
  position : sticky;
  top : 0px;
`;

export const CardItem = styled(motion.div)<{ bgColor: string }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: 0;
    height: 500px;
    width: 700px;
    padding:50px;
    background-color: ${props => props.bgColor};

    h2 {
      text-align: center;
      margin: 0px;
      font-size: 28px;
    }
`;

export const CardBody = styled.div`
  display: flex;
  height: 100%;
  margin-top: 50px;
`;

export const CardImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CardInner = styled(motion.div)`
  width : 100%;
  height : 100%;

  img {
    width : 100%;
    height : 100%;
    object-fit: cover;
  }
`;

export const ContentBox = styled.div`
    position: absolute;
    width : 700px;
    height : 500px;
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
    cursor: pointer;

    * {
      transform: translateY(25px);
      transition: transform 0.6s;
    }

    &:hover {
        opacity: 1;
        transform: scale(1.1);

        * {
          transform: translateY(0px);
        }
      }
    }

    p {
      word-break: break-word;
    }
`;