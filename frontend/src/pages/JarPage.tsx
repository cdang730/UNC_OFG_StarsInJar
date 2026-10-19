import { useMemo, useState } from "react";
import ArchTitle from "../components/ArchTitle";
import Jar from "../components/Jar";
import Modal from "../components/Modal";
import { STAR_IMAGES } from "../data/starImages";
import { makeMockStars, mockMessage } from "../data/mock";

type ModalType = "none" | "write" | "open";

export default function JarPage() {
  const stars = useMemo(() => makeMockStars(STAR_IMAGES, 40), []);
  const [modal, setModal] = useState<ModalType>("none");
  const [shaking, setShaking] = useState(false);
  const [draft, setDraft] = useState("");

  const pickStar = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setModal("open");
    }, 700); // matches the 0.7s shake animation
  };

  return (
    <main className="jar-page">
      <div className="stage">
        <ArchTitle text="Origami for Good" />
        <Jar stars={stars} shaking={shaking} />

        <div className="jar-actions">
          <button className="btn" onClick={pickStar} disabled={shaking}>Pick a Star</button>
          <button className="btn pink" onClick={() => setModal("write")}>Add a Star</button>
        </div>
      </div>

      {modal === "write" && (
        <Modal onClose={() => setModal("none")}>
          <h2>Add a star</h2>
          <textarea
            placeholder="Say something kind, funny, or encouraging…"
            maxLength={200}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <div className="modal-footer">
            <span className="counter">{draft.length} / 200</span>
            <button className="btn pink" onClick={() => setModal("none")}>Fold it into a star</button>
          </div>
        </Modal>
      )}

      {modal === "open" && (
        <Modal onClose={() => setModal("none")}>
          <div className="paper-wrap">
            {STAR_IMAGES[0] && <img className="open-star" src={STAR_IMAGES[0]} alt="" />}
            <div className="paper">{mockMessage}</div>
            <button className="btn" onClick={() => setModal("none")}>Put it back</button>
          </div>
        </Modal>
      )}
    </main>
  );
}