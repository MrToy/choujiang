import "./index.css";
const prizes = [];
let axis = [
  [0, 0],
  [1, 0],
  [2, 0],
  [2, 1],
  [2, 2],
  [1, 2],
  [0, 2],
  [0, 1],
];
let data = [
  ["蟹老板", require("./imgs/5.png"), "催稿者 一 夕匕"],
  ["流银", require("./imgs/2.png"), "我的超人"],
  ["艾尔", require("./imgs/6.png"), "抱枕清仓计划进度+1"],
  ["花花", require("./imgs/3.png"), "嘻嘻，游戏开始"],
  ["阿綪", require("./imgs/4.png"), "一阵刺耳的鸡叫声"],
  ["呆呆", require("./imgs/1.png"), "出门记得带伞"],
  ["多雷诺", require("./imgs/8.png"), "你爱我，我爱你"],
  ["夏飞", require("./imgs/1223F681BA759880795F393D4E6405AD.jpg"), "粉红色的回忆~"],
  // ["小熊猫",require('./imgs/A479E6A7D0E0D3CC4C740528FEFB6549.jpg')],



];
axis.forEach((item, index) => {
  prizes.push({
    x: item[0],
    y: item[1],
    title: data[index][0],
    desc: data[index][2],
    imgs: [
      {
        width: "100%",
        height: "100%",
        src: require("./imgs/8863B3DA3991312D435A7A9435F6A070.jpg"),
        activeSrc: data[index][1],
      },
    ],
  });
});

var myModal = new bootstrap.Modal(document.getElementById("myModal"));


// 九宫格抽奖
let luckyGrid = new LuckyCanvas.LuckyGrid(
  {
    el: "#my-lucky",
    width: 0.44*window.screen.height,
    height: 0.45*window.screen.height,
  },
  {
    blocks: [
      { padding: "1px", background: "#e2cea3", borderRadius: "13px" },
      { padding: "5px 0px", background: "#f3ecdc", borderRadius: "13px" },
      { padding: "1px", background: "#e2cea3", borderRadius: "8px" },
      {
        padding: "15px 10px",
        background: "#fffcf5",
        borderRadius: "8px",
      },
    ],
    prizes,
    buttons: [
      {
        x: 1,
        y: 1,
        background: "rgba(0, 0, 0, 0)",
        imgs: [
          {
            src: require("./imgs/6C662AF0463146897410C597A28ACF21.jpg"),
            width: "90%",
            top: "5%",
          },
        ],
      },
    ],
    defaultStyle: {
      background: "#ffefd6",
      borderRadius: "5px",
      fontColor: "#755c28",
      fontSize: "10px",
      lineHeight: "12px",
    },
    activeStyle: {
      background: "#de7247",
      fontColor: "#ffefd6",
    },
    start() {
      luckyGrid.play();
      setTimeout(() => {
        const x = Math.random();
        let idx = 0;
        if (x < 0.1) {
          idx = 0;
        } else if (x < 0.2) {
          idx = 1;
        } else if (x < 0.25) {
          idx = 2;
        } else if (x < 0.35) {
          idx = 3;
        } else if (x < 0.4) {
          idx = 4;
        } else if (x < 0.55) {
          idx = 5;
        } else if (x < 0.75) {
          idx = 6;
        } else {
          idx = 7;
        }
        luckyGrid.stop(idx);
      }, 2000);
    },
    end(prize) {
      document.querySelector(
        "#desc-content"
      ).textContent = `${prize.title} :   ${prize.desc}`;
      // alert(prize.desc)
      myModal.show();
    },
  }
);
