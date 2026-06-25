import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
  set: Set,
  name: {
    ja: "メガリザードンXex",
  },

  illustrator: "takuyoa",
  category: "Pokemon",
  hp: 360,
  types: ["Fire"],

  description: {
    ja: "",
  },

  stage: "Stage2",

  attacks: [
    {
      name: { ja: "インフェルノX" },
      damage: "90x",
      cost: ["Fire", "Fire"],
      effect: {
        ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×90ダメージ。",
      },
    },
  ],

  weaknesses: [{ type: "Water", value: "x2" }],
  resistances: [],

  variants: [{ type: "holo" }],

  evolveFrom: {
    ja: "メガリザードンYex",
  },

  retreat: 2,
  regulationMark: "I",
  rarity: "Mega Hyper Rare",
  dexId: [6],

  thirdParty: {
    cardmarket: 850624,
    tcgplayer: 655892,
  },
};

export default card;
