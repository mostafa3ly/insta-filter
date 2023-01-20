import "./App.css";
import CreateButton from "./components/CreateButton";

function App() {
  const handleSelectImage = (image: File) => {
  };

  return (
    <div className="App">
      <CreateButton onSelectImage={handleSelectImage} />
    </div>
  );
}

export default App;
