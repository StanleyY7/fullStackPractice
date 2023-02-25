import "./App.css";

import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import CommentCard from "./components/CommentCard/CommentCard";
import CommentDisplay from "./components/CommentDisplay/CommentDisplay";
import { useState } from "react";

const App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="div__wrapper">
      <ButtonAppBar />

      <div className="content__wrapper">
        <CommentDisplay
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
      </div>
      <div className="card__wrapper">
        <CommentCard buttonClicked={buttonClicked} />
      </div>
    </div>
  );
};

export default App;
