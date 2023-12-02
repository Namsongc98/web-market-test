function App() {
  return (
    <>
      <h1 className="text-primary test-p p-2 m-3 bg-hover-error-light-3 o-5  ">
        hello
      </h1>
      <div className="display-flex" style={{ width: "100%",}}>
        <div
          className="bg-orange"
          style={{ width: "30%", height: "50px" }}
        ></div>
        <div className="bg-blue br" style={{ width: "30%", height: "50px" }}></div>
        <div className="bg-red" style={{ width: "30%", height: "50px" }}></div>
      </div>
    </>
  );
}

export default App;
