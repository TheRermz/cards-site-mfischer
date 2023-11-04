import { useContext } from "react";
import { AsideStyled } from "./style";
import { GlobalCtx } from "../../App";

const Aside = () => {
  const theCtx = useContext(GlobalCtx);
  const handleClick = (newCount) => {
    theCtx.dispatch({ type: "SET_POSTS_PER_PAGE", payload: newCount });
  };
  return (
    <AsideStyled>
      <ul>
        <li onClick={() => handleClick(1)}>1</li>
        <li onClick={() => handleClick(8)}>8</li>
        <li onClick={() => handleClick(12)}>12</li>
        <li onClick={() => handleClick(16)}>16</li>
      </ul>
    </AsideStyled>
  );
};

export default Aside;
