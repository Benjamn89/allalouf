import React from "react";
import "./App.css";
import Title from "./Components/Title/title";
import ChooseM from "./Components/choose-method/choose-met";

const App = props => {
  const buttonOn = async () => {
    fetch(
      "https://gracious-heisenberg-38b314.netlify.com/.netlify/functions/api"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="test">
      <Title />
      <ChooseM />
      <button onClick={buttonOn} className="buttonto">
        Fetch
      </button>
    </div>
  );
};

export default App;

// try {
//   fetch(`https://je5xi.sse.codesandbox.io/query?${saveSelected.area}`)
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       if (data.length > 0) {
//         console.log(data);
//       } else {
//         console.log("Is less");
//       }
//     });
// } catch (err) {
//   console.error(err);
// }
