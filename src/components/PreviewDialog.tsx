import { FC, useEffect, useRef, useState } from "react";
import Dialog from "./Dialog";
import DialogContent from "./DialogContent";
import DialogHead from "./DialogHead";
import { fabric } from "fabric";
import { CANVAS_DIMENSIONS } from "../utils/constants";
import Filterbar from "./Filterbar";

interface Props {
  imgSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewDialog: FC<Props> = ({ imgSrc, isOpen, onClose }) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const [activeFilter, setActiveFilter] = useState("None");
  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setActiveFilter("None");
      setValue(0);
    }
  }, [isOpen]);

  const applyFilter = (filter: string, value: number): void => {
    const object = canvas!.getActiveObject() as fabric.Image;
    let appliedFilter = null;
    switch (filter) {
      case "Blur":
        appliedFilter = new (fabric.Image.filters as any).Blur({
          blur: value / 100,
        });
        break;
      case "Vintage":
        appliedFilter = new (fabric.Image.filters as any).Vintage();
        break;
      case "Sepia":
        appliedFilter = new fabric.Image.filters.Sepia();
        break;
      default:
        break;
    }
    if (!appliedFilter) {
      object.filters?.pop();
    } else {
      object.filters![0] = appliedFilter;
    }
    object.applyFilters();
    canvas!.renderAll();
  };

  const handleSelectFilter = (filter: string): void => {
    setActiveFilter(filter);
    setValue(10);
    applyFilter(filter, 10);
  };

  const handleChangeValue = (value: number): void => {
    setValue(value);
    applyFilter(activeFilter, value);
  };

  const onLoad = () => {
    const canvas = new fabric.Canvas(canvasEl.current, { interactive: false });
    fabric.Image.fromURL(imgSrc, (img) => {
      const width = img.width || 0;
      const height = img.height || 0;
      const scaleY = CANVAS_DIMENSIONS / height;
      const newHeight = scaleY * height;
      const newWidth = (newHeight * width) / height;
      const scaleX = newWidth / width;
      img.scaleX = scaleX;
      img.scaleY = scaleY;
      canvas.add(img);
      canvas.centerObject(img);
      canvas.setActiveObject(img);
    });
    setCanvas(canvas);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogHead title="Create new post" />
      <DialogContent>
        <canvas
          width={CANVAS_DIMENSIONS}
          height={CANVAS_DIMENSIONS}
          ref={canvasEl}
        />
        <img
          src={imgSrc}
          alt="Post"
          style={{ display: "none" }}
          onLoad={onLoad}
        />
        <Filterbar
          activeFilter={activeFilter}
          onSelectFilter={handleSelectFilter}
          value={value}
          onChangeValue={handleChangeValue}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
