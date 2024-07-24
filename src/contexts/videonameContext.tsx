import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react"; // 리액트와 필요한 훅 및 타입을 불러옴

// VideonameContext에서 사용할 상태와 함수를 정의하는 타입을 정의함
interface VideonameContextType {
  items: string[]; // 문자열 배열을 담는 상태
  addItem: (item: string) => void; // 문자열을 받아서 items에 추가하는 함수
}

// 기본 비디오 이름 리스트를 정의함
const defaultItems: string[] = ["내야수", "No22", "채은성"];

// VideonameContext를 생성함. 기본값으로 items와 addItem을 설정함
const VideonameContext = createContext<VideonameContextType>({
  items: defaultItems, // 기본값으로 defaultItems를 설정함
  addItem: () => {}, // 기본값으로 빈 함수 설정함
});

// VideonameProvider 컴포넌트를 정의함
export const VideonameProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [items, setItems] = useState<string[]>(defaultItems); // 상태를 정의하고 초기값으로 defaultItems를 설정함

  // 아이템을 추가하는 함수 정의함
  const addItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]); // 이전 아이템 배열에 새 아이템을 추가함
  };

  return (
    <VideonameContext.Provider value={{ items, addItem }}>
      {" "}
      {/* VideonameContext.Provider로 상태와 함수를 자식 컴포넌트들에게 제공함 */}
      {children} {/* 자식 컴포넌트들을 렌더링함 */}
    </VideonameContext.Provider>
  );
};

// VideonameContext를 사용하는 커스텀 훅 정의함
export const useVideoname = () => useContext(VideonameContext); // useContext 훅을 사용하여 VideonameContext의 값을 반환함
