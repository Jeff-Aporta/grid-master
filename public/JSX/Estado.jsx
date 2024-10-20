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
