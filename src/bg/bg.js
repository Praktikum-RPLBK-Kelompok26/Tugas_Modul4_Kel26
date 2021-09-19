import { useContext, createContext, useState } from "react";
// import "./context.css";

const themes = {
  light: {
    text: "rgb(97, 218, 251)",
    border: "1px solid black",
  },
  dark: {
    text: "#f87",
    border: "1px solid red",
    backround: "black",
  },
};

const ThemeContext = createContext();

export default function Context() {
  const [valueTheme, setValueTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
        className={`contentWrapper ${
          valueTheme === themes.light ? "dark" : "light"
        }`}
      >
        <Content tema={valueTheme} />
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          change
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="titleContext"
      style={{ color: theme.text }}
    >
      context value {theme.text}
    </p>
  );
}
