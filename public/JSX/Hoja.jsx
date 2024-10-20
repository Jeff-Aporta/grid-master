let COLS = 30;
let ROWS = 30;

let SELECTION_START = { C: -1, R: -1 };
let SELECTION_END = { C: -1, R: -1 };

function Hoja() {
  return (
    <div className="container-matriz">
      <div className="matriz">
        {Array.from({ length: ROWS }, (_, f) => {
          return <Renglon f={f} />;
        })}
      </div>
    </div>
  );

  function Renglon({ f }) {
    return (
      <div className={`line line-${f}`}>
        {Array.from({ length: COLS }, (_, c) => {
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
          tabIndex={0}
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

    function SEL_CELL({ c, f }) {
      document.querySelector(`.c${c}f${f}`).focus();
    }

    function Celda({ c, f }) {
      return (
        <div
          tabIndex={c + f * ROWS}
          className={`cell row-${f} col-${c} c${c}f${f}`}
          onClick={() => {
            SELECTION_START = { C: c, R: f };
            SELECTION_END = { C: c, R: f };
          }}
          onKeyDown={(e) => {
            e.preventDefault();
            const UNSEL = (() => {
              const escape = e.keyCode == 27;
              if (escape) {
                return true;
              }
              return false;
            })();
            if (UNSEL) {
              document.activeElement.blur();
              return SEL_CELL({ c: -1, f: -1 });
            }
            const UP = (() => {
              const up = e.keyCode == 38;
              if (up) {
                const enRango = f > 1;
                if (enRango) {
                  return true;
                }
              }
              return false;
            })();
            const RIGHT = (() => {
              const tab = !e.shiftKey && e.keyCode == 9;
              const right = e.keyCode == 39;
              if (tab || right) {
                const enRango = c < COLS - 1;
                if (enRango) {
                  return true;
                }
              }
              return false;
            })();
            const DOWN = (() => {
              const down = e.keyCode == 40;
              const enter = e.keyCode == 10;
              if (enter || down) {
                const enRango = f < ROWS - 1;
                if (enRango) {
                  return true;
                }
              }
              return false;
            })();
            const LEFT = (() => {
              const untab = e.shiftKey && e.keyCode == 9;
              const left = e.keyCode == 37;
              if (untab || left) {
                const enRango = c > 1;
                if (enRango) {
                  return true;
                }
              }
              return false;
            })();

            if (UP) {
              SEL_CELL({ c, f: f - 1 });
            }
            if (RIGHT) {
              SEL_CELL({ c: c + 1, f });
            }
            if (DOWN) {
              SEL_CELL({ c, f: f + 1 });
            }
            if (LEFT) {
              SEL_CELL({ c: c - 1, f });
            }
          }}
        ></div>
      );
    }
  }
}
