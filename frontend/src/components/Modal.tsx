import type { ReactNode } from "react";

type ModalProps = { onClose: () => void; children: ReactNode };

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      {/* stopPropagation so clicking inside the card doesn't close it */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
}