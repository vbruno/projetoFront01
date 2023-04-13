import style from "./App.module.css";

export function App() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
          alt="Cover"
        />
        <img
          className={style.avatar}
          src="https://github.com/vbruno.png"
          alt="Avatar"
        />
        <p className={style.p1}>Bruno S Velho</p>
        <p className={style.p2}>Web Developer</p>
        <div className={style.stack}>
          <span>#JavaScript</span>
          <span>#Native</span>
          <span>#Native</span>
          <span>#Native</span>
        </div>
      </div>
    </div>
  );
}
