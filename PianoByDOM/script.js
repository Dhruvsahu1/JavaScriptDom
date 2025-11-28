
const KeyDisplay = document.querySelector(".buttonPress");

const keyMap = [
  { btn: ".btn-1", sound: 0, label: "Q" },
  { btn: ".sm-btn-1", sound: 1, label: "2" },
  { btn: ".btn-2", sound: 2, label: "W" },
  { btn: ".sm-btn-2", sound: 3, label: "3" },
  { btn: ".btn-3", sound: 4, label: "E" },
  { btn: ".btn-4", sound: 5, label: "R" },
  { btn: ".sm-btn-3", sound: 6, label: "5" },
  { btn: ".btn-5", sound: 7, label: "T" },
  { btn: ".sm-btn-4", sound: 8, label: "6" },
  { btn: ".btn-6", sound: 9, label: "Y" },
  { btn: ".sm-btn-5", sound: 10, label: "7" },
  { btn: ".btn-7", sound: 11, label: "U" },
  { btn: ".btn-8", sound: 12, label: "I" },
  { btn: ".sm-btn-6", sound: 13, label: "9" },
  { btn: ".btn-9", sound: 14, label: "O" },
  { btn: ".sm-btn-7", sound: 15, label: "0" },
  { btn: ".btn-10", sound: 16, label: "P" },
  { btn: ".btn-11", sound: 17, label: "Z" },
  { btn: ".sm-btn-8", sound: 18, label: "S" },
  { btn: ".btn-12", sound: 19, label: "X" },
  { btn: ".sm-btn-9", sound: 20, label: "F" },
  { btn: ".btn-14", sound: 21, label: "V" },
  { btn: ".btn-15", sound: 22, label: "B" },
  { btn: ".sm-btn-10", sound: 23, label: "H" },
  { btn: ".btn-16", sound: 24, label: "N" },
  { btn: ".sm-btn-11", sound: 25, label: "J" },
  { btn: ".btn-17", sound: 26, label: "M" },
  { btn: ".btn-18", sound: 27, label: "," },
  { btn: ".sm-btn-12", sound: 28, label: "L" },
  { btn: ".btn-19", sound: 29, label: "." },
  { btn: ".sm-btn-13", sound: 30, label: ";" },
  { btn: ".btn-20", sound: 31, label: "/" },
  { btn: ".sm-btn-14", sound: 32, label: "'" },
  { btn: ".btn-21", sound: 33, label: "]" },
  { btn: ".btn-13", sound: 34, label: "A" }, 
  { btn: ".sm-btn-8", sound: 35, label: "D" }
];

function playAudio(index, displayLabel) {
  const audio = new Audio(`./${index}.mp3`);
  audio.play().catch(err => {
    console.warn("Playback prevented by browser (user interaction required).", err);
  });
  if (KeyDisplay) KeyDisplay.innerText = displayLabel ?? index;
  audio.onended = () => audio.remove();
}

keyMap.forEach(item => {
  const el = document.querySelector(item.btn);
  if (!el) return;
  el.addEventListener("click", () => playAudio(item.sound, item.label));
});

const codeMap = {
  "KeyQ": 0, "Digit2": 1, "KeyW": 2, "Digit3": 3, "KeyE": 4,
  "KeyR": 5, "Digit5": 6, "KeyT": 7, "Digit6": 8, "KeyY": 9,
  "Digit7": 10, "KeyU": 11, "KeyI": 12, "Digit9": 13, "KeyO": 14,
  "Digit0": 15, "KeyP": 16, "KeyZ": 17, "KeyS": 18, "KeyX": 19,
  "KeyF": 20, "KeyV": 21, "KeyB": 22, "KeyH": 23, "KeyN": 24,
  "KeyJ": 25, "KeyM": 26, "Comma": 27, "KeyL": 28, "Period": 29,
  "Semicolon": 30, "Slash": 31, "Quote": 32, "BracketRight": 33,
  "KeyA":34,"KeyD":35
};


const charMap = {
  "a": 9,  
  "d": 2,   
  "g": 7,   
  "c": 0,   
  "k": 12  
};

document.addEventListener("keydown", (e) => {
 
  if (e.altKey || e.ctrlKey || e.metaKey) return;

  if (codeMap[e.code] !== undefined) {
    playAudio(codeMap[e.code], e.code);
    return;
  }

  const k = (e.key || "").toLowerCase();
  if (k && charMap[k] !== undefined) {
    playAudio(charMap[k], k.toUpperCase());
    return;
  }

  
});
