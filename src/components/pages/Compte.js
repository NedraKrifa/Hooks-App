import React from "react";
import MyContext from "../contexts/MyContext";

const Compte = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="compte">
          <div>Change Your Username</div>
          <input
            type="text"
            placeholder="username..."
            value={context.userName}
            onChange={(e) => context.changeUserNameHandle(e)}
          />
        </div>
      )}
    </MyContext.Consumer>
  );
};
export default Compte;
