"use client";
import React, {
  MouseEvent,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
} from "react";
import { Transition } from "@headlessui/react";

type NextDialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string | ReactNode;
  actionTitle?: string;
  maxScrollHeight?: number;
  fullHeight?: boolean;
  draggable?: boolean;
  closeIcon?: boolean;
};

const NextDialog: React.FC<NextDialogProps> = ({
  open,
  onClose,
  children,
  title,
  actionTitle,
  maxScrollHeight = 500,
  fullHeight = false,
  closeIcon = false,
  draggable = false,
}) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 50 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    console.log("dialogRef ==>", dialogRef);
    if (open && dialogRef.current) {
      const dialog = dialogRef.current.getBoundingClientRect();
      setPosition({
        x: (window.innerWidth - dialog.width) / 2,
        y: (window.innerHeight - dialog.height) / 2,
      });
    }
  }, [open]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggable) {
      const dialog = dialogRef.current?.getBoundingClientRect();
      if (dialog) {
        setOffset({
          x: e.clientX - dialog.left,
          y: e.clientY - dialog.top,
        });
        setDragging(true);
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Memoize the dialog content and transition to prevent unnecessary re-renders
  const dialogContent = useMemo(
    () => (
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6 flex flex-col"
        ref={dialogRef}
        onMouseDown={handleMouseDown}
        style={
          draggable
            ? {
                cursor: "move",
                left: position.x,
                top: position.y,
                position: "fixed",
              }
            : {}
        }
      >
        <div className="flex items-center justify-between">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {closeIcon && (
            <button
              onClick={onClose}
              className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div
          className={`overflow-y-auto w-full ${
            fullHeight ? "h-[90vh]" : "max-h-[500px]"
          }`}
          style={{
            maxHeight: `${maxScrollHeight}px`,
          }}
        >
          <div>{children}</div>
        </div>

        {actionTitle && (
          <div className="flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="p-1 text-white w-1/4 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {actionTitle}
            </button>
          </div>
        )}
      </div>
    ),
    [
      open,
      draggable,
      position,
      children,
      title,
      closeIcon,
      actionTitle,
      maxScrollHeight,
      fullHeight,
    ]
  );

  return useMemo(
    () => (
      <Transition
        show={open}
        as="div"
        className="fixed inset-0 z-50 flex w-full h-full items-center justify-center overflow-y-auto bg-black bg-opacity-50"
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClickOutside}
      >
        {dialogContent}
      </Transition>
    ),
    [open, dialogContent]
  );
};

export default NextDialog;
