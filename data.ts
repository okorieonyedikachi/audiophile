import headset from "@/public/images/headset.png";
import speaker from "@/public/images/speaker1.png";
import speaker2 from "@/public/images/speaker2.png";
import earphone from "@/public/images/earphone.png";
import headset1 from "@/public/images/headset1.png";
import headset3 from "@/public/images/headset3.png";
import headset2 from "@/public/images/headset2.png";

export const list = [
  { title: "HOME", link: "/" },
  { title: "HEADPHONES", link: "/headphones" },
  { title: "SPEAKERS", link: "/speakers" },
  { title: "EARPHONES", link: "/earphones" },
];

export const categoryList = [
  { image: headset, name: "HEADPHONES", link: "/headphones" },
  { image: speaker, name: "SPEAKERS", link: "/speakers" },
  { image: earphone, name: "EARPHONES", link: "/earphones" },
];

export const headphonesList = [
  {
    image: headset1,
    name: "XX99 Mark II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    newProduct: true,
    reverse: false,
  },
  {
    image: headset2,
    name: "XX99 Mark I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    newProduct: false,
    reverse: true,
  },
  {
    image: headset3,
    name: "XX59 HEADPHONES",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    newProduct: false,
    reverse: false,
  },
];

export const speakerList = [
  {
    image: speaker,
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    newProduct: true,
    reverse: false,
  },
  {
    image: speaker2,
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    newProduct: false,
    reverse: true,
  },
];

export const earphonesList = [
  {
    image: earphone,
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    newProduct: true,
    reverse: false,
  },
];
