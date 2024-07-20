import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

interface VideonameContextType {
  items: string[];
  addItem: (item: string) => void;
}

const defaultItems: string[] = ["내야수", "No22", "채은성"];

const VideonameContext = createContext<VideonameContextType>({
  items: defaultItems,
  addItem: () => {},
});

export const VideonameProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [items, setItems] = useState<string[]>(defaultItems);

  const addItem = (item: string) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <VideonameContext.Provider value={{ items, addItem }}>
      {children}
    </VideonameContext.Provider>
  );
};

export const useVideoname = () => useContext(VideonameContext);
