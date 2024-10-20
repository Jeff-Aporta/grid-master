function Herramientas() {
  return (
    <div className="barra-de-herramientas">
      <DesplegableYTitulo />
      <MenuCompacto
        itemsGroup={[
          {
            groupID: "actions",
            items: [
              {
                classID: "deshacer",
                icon: "fa-solid fa-undo",
                tooltip: "Deshacer",
              },
              {
                classID: "rehacer",
                icon: "fa-solid fa-redo",
                tooltip: "Rehacer",
              },
              {
                classID: "zoom",
                icon: "fa-solid fa-search",
                tooltip: "Zoom",
              },
            ],
          },
          {
            groupID: "formatos",
            items: [
              {
                classID: "as-money",
                icon: "fa-solid fa-dollar-sign",
                tooltip: "formatear como moneda",
              },
              {
                classID: "as-percent",
                icon: "fa-solid fa-percent",
                tooltip: "formatear como porcentaje",
              },
              {
                classID: "more-formats",
                icon: "fa-solid fa-ellipsis-h",
                tooltip: "más formatos",
              },
            ],
          },
        ]}
      />
    </div>
  );

  function MenuCompacto({ itemsGroup }) {
    console.log(itemsGroup);
    return (
      <div className="menu-compacto">
        {itemsGroup.map((group) => (
          <Box
            className="group"
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              gap: "3px",
              border: "2px solid",
              borderColor: "divider",
              alignItems: "center",
              alignItems: "center",
              borderRadius: 1,
              color: "text.secondary",
              "& svg": {
                m: 1,
              },
              [`& .${dividerClasses.root}`]: {
                mx: 0.5,
              },
            }}
          >
            {group.items.map((item, i, arr) => {
              return [
                <Tooltip title={item.tooltip}>
                  <IconButton size="small" className={`item ${item.classID}`}>
                    <i class={item.icon} />
                  </IconButton>
                </Tooltip>,
                i == arr.length - 1 ? null : (
                  <Divider orientation="vertical" flexItem />
                ),
              ];
            })}
          </Box>
        ))}
      </div>
    );
  }

  function DesplegableYTitulo() {
    return (
      <div className="desplegable">
        <div className="logo">
          <img src="IMG/logo64.png" alt="" />
        </div>
        <div>
          <div className="titulo">
            <div className="nombre">Hoja de cálculo</div>
            <div className="menu">
              <span>Archivo</span>
              <span>Editar</span>
              <span>Ver</span>
              <span>Insertar</span>
              <span>Formato</span>
              <span>Datos</span>
              <span>Herramientas</span>
              <span>Extensiones</span>
              <span>Ayuda</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
