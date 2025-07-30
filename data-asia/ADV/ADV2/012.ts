import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "キラバ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [156],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "スラッシュ",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "燃えている爪",
                                                                      },
          effect: {
                        ja: "Quilavaに取り付けられたファイヤーエネルギーカードを捨てることができます。もしそうなら、防御するポケモンは燃やされます。",
                                                                      },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
