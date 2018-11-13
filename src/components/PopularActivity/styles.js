import styled from "styled-components";

export default styled.div`
  width: calc(25% - 15px);
  height: 250px;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;

  ${props =>
    props.image &&
    `
    background-image: url(${props.image});
    background-size: cover;
  `}

  >.overlay {
    visibility: hidden;
  }

  &:hover {
    > .overlay {
      visibility: visible;
      opacity: 0.5;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  vertical-align: middle;
  line-height: 250px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 0 1px 3px #333;
  position: relative;
  z-index: 2;
`;

export const Overlay = styled.div.attrs({ className: "overlay" })`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Meta = styled.div`
  background: #f5f6f7;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
  overflow: hidden;
`;

export const MetaActivities = styled.div`
  padding: 3px 15px;
  font-size: 14px;
  font-weight: bold;
  color: #707071;
  float: left;
`;
export const PullRight = styled.div`
  float: right;
  padding: 3px 15px;
  font-size: 14px;
  font-weight: bold;
  color: #707071;
`;
