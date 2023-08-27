import Navbar from "./components/navbar/Navbar";
import ScrollableContent from "./components/scrollableContent/ScrollableContent";

function App() {
  return (
    <>
      <Navbar />
      <div className="content-body">
        <ScrollableContent />
      </div>
    </>
  );
}

export default App;
