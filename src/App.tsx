import { useState } from "react";
import "./App.css";
import CreateButton from "./components/CreateButton";
import PreviewDialog from "./components/PreviewDialog";

function App() {
  const [imageSrc, setImageSrc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectImage = (image: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = (): void => {
      setImageSrc(reader.result as string);
      setIsModalOpen(true);
    };
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    const input = document.getElementById("image-input") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  return (
    <div className="App">
      <CreateButton onSelectImage={handleSelectImage} />
      <PreviewDialog
        imgSrc={imageSrc}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
