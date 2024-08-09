import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  /** Not yet implemented in the modal wont be helpful */
  onClose?: () => void;
  children: ReactNode;
  /**  Optional prop to control the visibility of the modal  */
  isOpen?: boolean;
};

const Modal = ({ children, isOpen = true }: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className={`
    absolute inset-0 z-50 flex justify-center items-center overflow-y-hidden backdrop-blur
    `}
    >
      <div
        className="flex flex-col relative items-center max-h-full max-w-full w-[700px] h-[600px] overflow-hidden rounded-lg"
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
