import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ブレルーム",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [286],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ヘッドバット",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "バトルブラスト",
                                                                      },
          effect: {
                        ja: "Breloomに付随する各戦闘エネルギーに対して、40のダメージと10ダメージがさらに10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
