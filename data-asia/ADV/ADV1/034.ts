import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "麻山",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "スーパースラッププッシュ",
                                                                      },
          effect: {
                        ja: "防御する各ポケモンに20のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "メガスロー",
                                                                      },
          effect: {
                        ja: "防御ポケモンがポケモンエクスである場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
                                                                      },
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
