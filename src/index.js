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
  [
    "多雷诺",
    require("./imgs/4B9F70CB4A21FDFD04118CFE1DEDABF9.jpg"),
    "喝杯忘崽牛奶压压惊",
  ],
  [
    "夏飞",
    require("./imgs/DF702A6C8F25FE175EF42328423E8B8E.jpg"),
    "我猜我的上家也许不是土块。",
  ],
  [
    "流银",
    require("./imgs/FD5DE6ABA04E8E39B8A2E9993FE49D39.jpg"),
    "靓仔，不努力拼一下和咸鱼有咩区别？",
  ],
  [
    "艾尔",
    require("./imgs/3FC7A8FB518917F38C5CCD8F2ED119EA.jpg"),
    "当当当！人生重来枪！",
  ],
  [
    "花花",
    require("./imgs/945700B6EF8F3E6A6E3DB72597EC6DBC.png"),
    "好兄弟发财带上我，嘻嘻",
  ],
  // ["小熊猫",require('./imgs/A479E6A7D0E0D3CC4C740528FEFB6549.jpg')],
  [
    "阿綪",
    require("./imgs/DB44E50A9F0431A50D4FF8016FEB12F1.jpg"),
    "喂！三点几了，做卵工啊做，饮茶先啦！",
  ],
  [
    "呆呆",
    require("./imgs/F194FF08994E29D0669295A714A1AFB2.jpg"),
    "你拒绝的是一个天神的爱, 谢谢你洛佩sama",
  ],
  [
    "蟹老板",
    require("./imgs/951852AA161DA87CF2241ADE56F77D0B.jpg"),
    "蟹蟹你，大善人 【惨】",
  ],
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
        src: require("./imgs/C9E971160DC05384CC65A0C524F1E9CE.png"),
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
    width: "350px",
    height: "370px",
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
            src: require("./imgs/E6A05A95A6EB25546B642B4D4E6BFB61.jpg"),
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
        let idx = (Math.random() * 8) >> 0;
        if (idx == 6) {
          idx = (Math.random() * 8) >> 0;
        }
        luckyGrid.stop(idx);
      }, 2000);
    },
    end(prize) {
      document.querySelector("#desc-content").textContent = `${prize.title} :   ${prize.desc}`;
      // alert(prize.desc)
      myModal.show();
    },
  }
);
