import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson";

export function App() {
  const listStack = [
    { Tec: "JavaScript", color: "#3d3d3d" },
    { Tec: "HTML" },
    { Tec: "CSS" },
    { Tec: "Typescript" },
    { Tec: "React" },
  ];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
        avatar="https://github.com/vbruno.png"
        name="Bruno S Velho"
        office="Web Developer"
        stacks={listStack}
      />
    </div>
  );
}
