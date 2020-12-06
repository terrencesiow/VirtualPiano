document.addEventListener("keydown", function(event) {
  let key = event.code;
  let audio = document.createElement("AUDIO");

  if (key === "KeyA") {
    audio.src = "audio/A.mp3";
  }else if (event.code === "KeyS") {
    audio.src = "audio/S.mp3";
  }else if (event.code === "KeyD") {
    audio.src = "audio/D.mp3";
  }else if (event.code === "KeyF") {
    audio.src = "audio/F.mp3";
  }else if (event.code === "KeyG") {
    audio.src = "audio/G.mp3";
  }else if (event.code === "KeyH") {
    audio.src = "audio/H.mp3";
  }else if (event.code === "KeyJ") {
    audio.src = "audio/J.mp3";
  }else if (event.code === "KeyW") {
    audio.src = "audio/black_keys/W.mp3";
  }else if (event.code === "KeyE") {
    audio.src = "audio/black_keys/E.mp3";
  }else if (event.code === "KeyT") {
    audio.src = "audio/black_keys/T.mp3";
  }else if (event.code === "KeyY") {
    audio.src = "audio/black_keys/Y.mp3";
  }else if (event.code === "KeyU") {
    audio.src = "audio/black_keys/U.mp3";
  }else {
    console.log("Warning.");
  }
  audio.play();
});
