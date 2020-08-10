import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
  const [userName, setUserName] = useState("User");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.title = `Hello,${userName}`;
  }, [userName]);
  const changeUserNameHandle = (e) => {
    setUserName(e.target.value);
  };
  const setThemeMode=()=>{
      setTheme(theme === "light"? "dark" : "light");
  }
  return (
    <MyContext.Provider value={{ userName, changeUserNameHandle , theme, setThemeMode }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyProvider;
