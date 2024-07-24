import React from "react";
import HomePage from "./component/HomePage";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;

// 컴포넌트에 각각에서 사이즈를 제시.
// App에서 합쳐도 되고, 라우터를 사용해서 담을 수 있음.
