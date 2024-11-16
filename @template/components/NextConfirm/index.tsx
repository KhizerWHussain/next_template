import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface NextConfirmDialogProp {
  title: string | ReactNode;
  text: string | ReactNode;
  onConfirm: () => void;
  state: [open: boolean, setOpen: Dispatch<SetStateAction<boolean>>];
  btnTexts?: [string, string];
}

const NextConfirmDialog: React.FC<NextConfirmDialogProp> = ({
  onConfirm,
  text,
  title,
  state,
  btnTexts,
}) => {
  const [open, setOpen] = state;
  if (!open) return null;

  const handleClickOutside = () => {
    setOpen(false);
  };

  const yesText = btnTexts ? btnTexts[0] : "Yes";
  const noText = btnTexts && btnTexts.length === 2 ? btnTexts[1] : "No";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing dialog
      >
        <div className="border-b px-6 py-4">
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <div className="px-6 py-4 text-gray-700">
          <p>{text}</p>
        </div>
        <div className="border-t flex justify-end space-x-4 p-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={onConfirm}
          >
            {yesText}
          </button>
          <button
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
            onClick={handleClickOutside}
          >
            {noText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextConfirmDialog;
