import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "Hitmonchan ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [107],
      hp: 90,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "安定したパンチ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
                        ja: "スカイアッパーカット",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は、抵抗の影響を受けません。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
