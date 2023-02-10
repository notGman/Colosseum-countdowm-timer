import Header from "./components/Header";
import Count from "./components/Timer";

const App = () => {
  return (
    <div style={{ minHeight: "100vh"}} className="d-flex justify-content-center pt-3">
      <div style={{width:'100%'}}>
        <Header />
        <Count />
      </div>
    </div>
  );
};

export default App;
