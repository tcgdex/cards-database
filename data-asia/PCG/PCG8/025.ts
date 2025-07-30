import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "ロンベル",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [271],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "略奪",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "波のスプラッシュ",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
