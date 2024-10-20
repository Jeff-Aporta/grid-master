console.log("funciona");

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
}

ReactDOM.render(<App />, document.querySelector("body"));
