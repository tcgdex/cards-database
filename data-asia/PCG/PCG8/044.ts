import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "Combusken",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [256],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "フォーカスエネルギー",
                                                                      },
          effect: {
                        ja: "次のターン中、CombuskenのHigh Jamg Kick Attackのベースダメージは70です。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ハイジャンプキック",
                                                                      },
          damage: 30,
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
