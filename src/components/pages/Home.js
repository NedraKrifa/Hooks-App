import React from "react";
import MyContext from "../contexts/MyContext";

const Home = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="home">
          <div className="home_title">{context.userName} Blog</div>
          <div className="home_description">
            I am an embedded telecommunication engineer student and a Full-stack
            JavaScript intern. I am interested in web technologies especially
            react and react native with a pang of great hunger for knowledge,
            with a dream to control the force and becoming a react Jedi.
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
};
export default Home;
