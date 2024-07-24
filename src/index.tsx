// 리액트 라이브러리를 불러옵니다. 리액트를 사용하기 위해 꼭 필요합니다.
import React from "react";

// 리액트를 웹 브라우저에 렌더링하기 위해 필요한 라이브러리를 불러옵니다.
import ReactDOM from "react-dom/client";

// 전체 애플리케이션에 적용할 CSS 파일을 불러옵니다.
import "./index.css";

// App 컴포넌트를 불러옵니다. 애플리케이션의 메인 컴포넌트입니다.
import App from "./App";

// 웹 성능을 측정하고 결과를 리포트하는 함수를 불러옵니다.
import reportWebVitals from "./reportWebVitals";

// root라는 상수를 만들어, HTML 파일에서 "root"라는 id를 가진 요소를 가져옵니다.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// root 요소에 리액트 컴포넌트를 렌더링합니다.
root.render(
  // <React.StrictMode>는 리액트에서 잠재적인 문제를 찾기 위해 사용하는 도구입니다.
  <React.StrictMode>
    {/* App 컴포넌트를 렌더링합니다. App 컴포넌트는 애플리케이션의 시작점입니다. */}
    <App />
  </React.StrictMode>
);

// 웹 성능을 측정하고 결과를 리포트하는 함수를 실행합니다.
reportWebVitals();
