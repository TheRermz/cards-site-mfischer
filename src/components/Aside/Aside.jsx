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
        <li onClick={() => handleClick(2)}>2</li>
        <li onClick={() => handleClick(3)}>3</li>
        <li onClick={() => handleClick(4)}>4</li>
        <li onClick={() => handleClick(5)}>5</li>
        <li onClick={() => handleClick(6)}>6</li>
        <li onClick={() => handleClick(7)}>7</li>
        <li onClick={() => handleClick(8)}>8</li>
      </ul>
    </AsideStyled>
  );
};

export default Aside;
