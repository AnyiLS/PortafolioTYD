import React, { useContext } from 'react';
import RouterApp from './router/RouterApp';
import { themeContext } from "./Context";

const App = () => {

  const theme = useContext(themeContext);
  const darkMode = theme?.state.darkMode;
    return <div
    style={{
        background: !darkMode ? "#3458a34f" : "",
        color: darkMode ? "white" : "",
      }}
    >
        <RouterApp />
    </div>;
};

export default App;
