function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Herramientas />
        <Hoja />
        <Estado />
      </div>
    </ThemeProvider>
  );

  function Estado() {
    return (
      <div className="estado">
        <Tooltip title="Nueva hoja">
          <IconButton size="small">
            <i className="fa fa-plus"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Todas las hojas">
          <IconButton size="small">
            <i className="fa fa-bars"></i>
          </IconButton>
        </Tooltip>
        <div className="pestañas-de-hojas">
          <Tooltip title="Scroll hojas, izquierda">
            <div className="scroll btn-cyan">
              <i className="fa fa-caret-left"></i>
            </div>
          </Tooltip>
          <div className="contenido">
            {Array.from({ length: 15 }, (_, i) => {
              return <HojaPestaña nombre={"Hoja " + (i + 1)} />;
            })}
          </div>
          <Tooltip title="Scroll hojas, derecha">
            <div className="scroll btn-cyan">
              <i className="fa fa-caret-right"></i>
            </div>
          </Tooltip>
        </div>
      </div>
    );

    function HojaPestaña({ nombre }) {
      return (
        <div className="hoja">
          <label>
            <input type="radio" name="hoja" />
            <span className="nombre">{nombre}</span>
          </label>
          <Tooltip title="Opciones de hoja">
            <div className="opns btn-cyan">
              <i className="fa fa-caret-down"></i>
            </div>
          </Tooltip>
        </div>
      );
    }
  }

  function Hoja() {
    return (
      <div className="container-matriz">
        <div className="matriz">
          {Array.from({ length: 30 }, (_, f) => {
            return <Renglon f={f} />;
          })}
        </div>
      </div>
    );

    function Renglon({ f }) {
      return (
        <div className={`line line-${f}`}>
          {Array.from({ length: 30 }, (_, c) => {
            if (f == 0) {
              if (c == 0) {
                return <Origin />;
              }
              return <ControlCol c={c} f={f} />;
            }
            if (f > 0 && c == 0) {
              return <ControlFila c={c} f={f} />;
            }
            return <Celda c={c} f={f} />;
          })}
        </div>
      );

      function Origin() {
        const c = 0,
          f = 0;
        return (
          <div
            className={`cell control origin row-${f} col-${c} c${c}f${f}`}
          ></div>
        );
      }

      function ControlCol({ c, f }) {
        return (
          <div className={`cell control col row-${f} col-${c} c${c}f${f}`}>
            {c}
            <div className="resize-col"></div>
          </div>
        );
      }

      function ControlFila({ c, f }) {
        return (
          <div className={`cell control row row-${f} col-${c} c${c}f${f}`}>
            {f}
          </div>
        );
      }

      function Celda({ c, f }) {
        return <div className={`cell row-${f} col-${c} c${c}f${f}`}></div>;
      }
    }
  }
}

ReactDOM.render(<App />, document.querySelector("body"));
