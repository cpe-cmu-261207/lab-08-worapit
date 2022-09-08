const CanvasLib = {
  createEmptyCanvas: () => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i].push("#FFFFFF");
    }
    return a;
  },

  copyCanvas: (source) => {
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++) a[i] = source[i];
    }
    return a;
  },

  createRandomCanvas: () => {
    const colors = [
      "#000000",
      "#804000",
      "#FE0000",
      "#FE6A00",
      "#FFD800",
      "#00FF01",
      "#FFFFFF",
      "#01FFFF",
      "#0094FE",
      "#0026FF",
      "#B100FE",
      "#FF006E",
    ];

    //get random color
    //colors[Math.floor(Math.random() * colors.length)];
    // 0-11
    //please create 16*16 array as output from this fn
    const a = [];
    for (let i = 0; i < 16; i++) {
      a.push([]);
      for (let j = 0; j < 16; j++)
        a[i][j] = colors[Math.floor(Math.random() * colors.length)];
    }
    return a;
  },
};

export default CanvasLib;
