import React from "react";
import CloseIcon from "../assets/close.svg";

export const Settings = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      //   onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: "auto",
          width: "auto",
          margin: "auto",
          padding: "2rem 2.5rem",
          boxShadow: "2px solid black",
        }}
      >
        <div className="flex justify-between pb-4">
          <h2 className="text-2xl font-bold">Puzzle Settings</h2>
          <button onClick={onClose}>
            <img className="w-5 h-5" src={CloseIcon} alt="" />
          </button>
        </div>

        <form className="flex justify-between gap-4">
          <div>
            {/* After changing direction with arrow keys */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">
                After changing direction with arrow keys
              </h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="staySame"
                    name="arrowOption"
                    value="staySame"
                  />
                  <label for="staySame">Stay in the same square</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="moveArrow"
                    name="arrowOption"
                    value="moveArrow"
                  />
                  <label for="moveArrow">
                    Move in the direction of the arrow
                  </label>
                </div>
              </div>
            </section>
            {/* Pressing the spacebar should */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">
                Pressing the spacebar should
              </h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="clearCurrent"
                    name="spacebarOption"
                    value="clearCurrent"
                  />
                  <label for="clearCurrent">
                    Clear the current square and advance
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="toggleBetween"
                    name="spacebarOption"
                    value="toggleBetween"
                  />
                  <label for="toggleBetween">
                    Toggle between Across and Down
                  </label>
                </div>
              </div>
            </section>
            {/* At the start of a word */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">
                At the start of a word
              </h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="backspacePrev"
                    name="startOfWordOption"
                    value="backspacePrev"
                  />
                  <label for="backspacePrev">
                    Backspace into previous word
                  </label>
                </div>
              </div>
            </section>
            {/* Within a word */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">Within a word</h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="skipOver"
                    name="skipOver"
                    value="skipOver"
                  />
                  <label for="skipOver">Skip over filled squares</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="evenSquares"
                    name="evenSquares"
                    value="evenSquares"
                  />
                  <label for="evenSquares">Even penciled-in squares</label>
                </div>
              </div>
            </section>
          </div>

          <div>
            {/* At the end of a word */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">At the end of a word</h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="jumpBack"
                    name="jumpBack"
                    value="jumpBack"
                  />
                  <label for="jumpBack">
                    Jump back to first blank in the word
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="jumpNext"
                    name="jumpNext"
                    value="jumpNext"
                  />
                  <label for="jumpNext">
                    Jump to next clue (if not jumping back)
                  </label>
                </div>
              </div>
            </section>
            {/* Interactions */}
            <section>
              <h3 className="pt-2 pb-1 font-semibold">Interactions</h3>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="playSound"
                    name="playSound"
                    value="playSound"
                  />
                  <label for="playSound">Play sound on solve</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="showTimer"
                    name="showTimer"
                    value="showTimer"
                  />
                  <label for="showTimer">Show timer</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="disqualificationWarning"
                    name="disqualificationWarning"
                    value="disqualificationWarning"
                  />
                  <label for="disqualificationWarning">
                    Suppress disqualification warnings
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="puzzleMilestones"
                    name="puzzleMilestones"
                    value="puzzleMilestones"
                  />
                  <label for="puzzleMilestones">Show puzzle milestones</label>
                </div>
              </div>
            </section>
          </div>
        </form>

        <div className="flex justify-center gap-4 mt-4">
          <button className="px-6 py-3 border rounded-full" disabled>
            Restore defaults
          </button>
          <button className="px-6 py-3 text-white bg-black rounded-full">
            Save and close
          </button>
        </div>
      </div>
    </div>
  );
};
