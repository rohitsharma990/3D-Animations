function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `img1/aaaaaaaaaaaa.png
  img1/male0001.png
  img1/male0002.png
  img1/male0003.png
  img1/male0004.png
  img1/male0005.png
  img1/male0006.png
  img1/male0007.png
  img1/male0008.png
  img1/male0009.png
  img1/male0010.png
  img1/male0011.png
  img1/male0012.png
  img1/male0013.png
  img1/male0014.png
  img1/male0015.png
  img1/male0016.png
  img1/male0017.png
  img1/male0018.png
  img1/male0019.png
  img1/male0020.png
  img1/male0021.png
  img1/male0022.png
  img1/male0023.png
  img1/male0024.png
  img1/male0025.png
  img1/male0026.png
  img1/male0027.png
  img1/male0028.png
  img1/male0029.png
  img1/male0030.png
  img1/male0031.png
  img1/male0032.png
  img1/male0033.png
  img1/male0034.png
  img1/male0035.png
  img1/male0036.png
  img1/male0037.png
  img1/male0038.png
  img1/male0039.png
  img1/male0040.png
  img1/male0041.png
  img1/male0042.png
  img1/male0043.png
  img1/male0044.png
  img1/male0045.png
  img1/male0046.png
  img1/male0047.png
  img1/male0048.png
  img1/male0049.png
  img1/male0050.png
  img1/male0051.png
  img1/male0052.png
  img1/male0053.png
  img1/male0054.png
  img1/male0055.png
  img1/male0056.png
  img1/male0057.png
  img1/male0058.png
  img1/male0059.png
  img1/male0060.png
  img1/male0061.png
  img1/male0062.png
  img1/male0063.png
  img1/male0064.png
  img1/male0065.png
  img1/male0066.png
  img1/male0067.png
  img1/male0068.png
  img1/male0069.png
  img1/male0070.png
  img1/male0071.png
  img1/male0072.png
  img1/male0073.png
  img1/male0074.png
  img1/male0075.png
  img1/male0076.png
  img1/male0077.png
  img1/male0078.png
  img1/male0079.png
  img1/male0080.png
  img1/male0081.png
  img1/male0082.png
  img1/male0083.png
  img1/male0084.png
  img1/male0085.png
  img1/male0086.png
  img1/male0087.png
  img1/male0088.png
  img1/male0089.png
  img1/male0090.png
  img1/male0091.png
  img1/male0092.png
  img1/male0093.png
  img1/male0094.png
  img1/male0095.png
  img1/male0096.png
  img1/male0097.png
  img1/male0098.png
  img1/male0099.png
  img1/male0100.png
  img1/male0101.png
  img1/male0102.png
  img1/male0103.png
  img1/male0104.png
  img1/male0105.png
  img1/male0106.png
  img1/male0107.png
  img1/male0108.png
  img1/male0109.png
  img1/male0110.png
  img1/male0111.png
  img1/male0112.png
  img1/male0113.png
  img1/male0114.png
  img1/male0115.png
  img1/male0116.png
  img1/male0117.png
  img1/male0118.png
  img1/male0119.png
  img1/male0120.png
  img1/male0121.png
  img1/male0122.png
  img1/male0123.png
  img1/male0124.png
  img1/male0125.png
  img1/male0126.png
  img1/male0127.png
  img1/male0128.png
  img1/male0129.png
  img1/male0130.png
  img1/male0131.png
  img1/male0132.png
  img1/male0133.png
  img1/male0134.png
  img1/male0135.png
  img1/male0136.png
  img1/male0137.png
  img1/male0138.png
  img1/male0139.png
  img1/male0140.png
  img1/male0141.png
  img1/male0142.png
  img1/male0143.png
  img1/male0144.png
  img1/male0145.png
  img1/male0146.png
  img1/male0147.png
  img1/male0148.png
  img1/male0149.png
  img1/male0150.png
  img1/male0151.png
  img1/male0152.png
  img1/male0153.png
  img1/male0154.png
  img1/male0155.png
  img1/male0156.png
  img1/male0157.png
  img1/male0158.png
  img1/male0159.png
  img1/male0160.png
  img1/male0161.png
  img1/male0162.png
  img1/male0163.png
  img1/male0164.png
  img1/male0165.png
  img1/male0166.png
  img1/male0167.png
  img1/male0168.png
  img1/male0169.png
  img1/male0170.png
  img1/male0171.png
  img1/male0172.png
  img1/male0173.png
  img1/male0174.png
  img1/male0175.png
  img1/male0176.png
  img1/male0177.png
  img1/male0178.png
  img1/male0179.png
  img1/male0180.png
  img1/male0181.png
  img1/male0182.png
  img1/male0183.png
  img1/male0184.png
  img1/male0185.png
  img1/male0186.png
  img1/male0187.png
  img1/male0188.png
  img1/male0189.png
  img1/male0190.png
  img1/male0191.png
  img1/male0192.png
  img1/male0193.png
  img1/male0194.png
  img1/male0195.png
  img1/male0196.png
  img1/male0197.png
  img1/male0198.png
  img1/male0199.png
  img1/male0200.png
  img1/male0201.png
  img1/male0202.png
  img1/male0203.png
  img1/male0204.png
  img1/male0205.png
  img1/male0206.png
  img1/male0207.png
  img1/male0208.png
  img1/male0209.png
  img1/male0210.png
  img1/male0211.png
  img1/male0212.png
  img1/male0213.png
  img1/male0214.png
  img1/male0215.png
  img1/male0216.png
  img1/male0217.png
  img1/male0218.png
  img1/male0219.png
  img1/male0220.png
  img1/male0221.png
  img1/male0222.png
  img1/male0223.png
  img1/male0224.png
  img1/male0225.png
  img1/male0226.png
  img1/male0227.png
  img1/male0228.png
  img1/male0229.png
  img1/male0230.png
  img1/male0231.png
  img1/male0232.png
  img1/male0233.png
  img1/male0234.png
  img1/male0235.png
  img1/male0236.png
  img1/male0237.png
  img1/male0238.png
  img1/male0239.png
  img1/male0240.png
  img1/male0241.png
  img1/male0242.png
  img1/male0243.png
  img1/male0244.png
  img1/male0245.png
  img1/male0246.png
  img1/male0247.png
  img1/male0248.png
  img1/male0249.png
  img1/male0250.png
  img1/male0251.png
  img1/male0252.png
  img1/male0253.png
  img1/male0254.png
  img1/male0255.png
  img1/male0256.png
  img1/male0257.png
  img1/male0258.png
  img1/male0259.png
  img1/male0260.png
  img1/male0261.png
  img1/male0262.png
  img1/male0263.png
  img1/male0264.png
  img1/male0265.png
  img1/male0266.png
  img1/male0267.png
  img1/male0268.png
  img1/male0269.png
  img1/male0270.png
  img1/male0271.png
  img1/male0272.png
  img1/male0273.png
  img1/male0274.png
  img1/male0275.png
  img1/male0276.png
  img1/male0277.png
  img1/male0278.png
  img1/male0279.png
  img1/male0280.png
  img1/male0281.png
  img1/male0282.png
  img1/male0283.png
  img1/male0284.png
  img1/male0285.png
  img1/male0286.png
  img1/male0287.png
  img1/male0288.png
  img1/male0289.png
  img1/male0290.png
  img1/male0291.png
  img1/male0292.png
  img1/male0293.png
  img1/male0294.png
  img1/male0295.png
  img1/male0296.png
  img1/male0297.png
  img1/male0298.png
  img1/male0299.png
  img1/male0300.png
  `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
