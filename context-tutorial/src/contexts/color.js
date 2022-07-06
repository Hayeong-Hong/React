import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", fontColor: "red" },
  actions: {
    setColor: () => {},
    setFontColor: () => {},
  },
});

// const obj = {
//   state: { color: "black", fontColor: "red" },
//   actions: {
//     setColor: () => {},
//     setFontColor: () => {},
//   },
// };

// const { state, actions } = obj;

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [fontColor, setFontColor] = useState("red");

  const value = {
    state: { color, fontColor },
    actions: { setColor, setFontColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//ColorContext.Consumer를 ColorConsumer라는 변수에 담아줌
const { Consumer: ColorConsumer } = ColorContext;

//ColorProvider, ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
