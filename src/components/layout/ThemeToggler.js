import React from "react";
import MyContext from "../contexts/MyContext";

const ThemeToggler = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="theme_toggler" onClick={() => context.setThemeMode()}>
          <span>{context.theme.toUpperCase()}</span>
        </div>
      )}
    </MyContext.Consumer>
  );
};
export default ThemeToggler;
