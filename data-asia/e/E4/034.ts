import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ライチュ",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "zzzap",
          },
          effect: {
            ja: "この攻撃は、ポックで各ポケモンに20のダメージを与えますか？ （衰弱や抵抗を適用しないでください。）",
          },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            ja: "稲妻",
          },
          effect: {
            ja: "コインをひっくり返します。尾の場合、Raichuに2つのダメージカウンターを入れます。",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
