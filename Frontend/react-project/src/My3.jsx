import { useState } from "react";

function UpdateMe() {
  const [text, setText] = useState("I am learning react");

  const updateText = () => {
    setText("I am learning react and hooks as well");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={updateText}>Update Me</button>
    </div>
  );
}
export default UpdateMe;
