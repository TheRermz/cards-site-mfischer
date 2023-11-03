import { ThemeProvider } from "styled-components";
import { theme } from "./themes/themes";

import Aside from "./components/Aside/Aside.jsx";
import { Cards } from "./components/Cards/Cards.jsx";
import { Container } from "./App-style.js";
import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./context/reducer.js";

const globalState = { postPerPage: 8 };
export const GlobalCtx = createContext();

function App() {
  // const [context, setContext] = useState(globalState); // old
  const [state, dispatch] = useReducer(reducer, globalState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => setPosts(r))
      .catch((e) => console.error(e));
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalCtx.Provider value={{ state, dispatch, posts }}>
        <Container>
          <Aside />
          <Cards>FUCKING CARDS</Cards>
        </Container>
      </GlobalCtx.Provider>
    </ThemeProvider>
  );
}

export default App;
