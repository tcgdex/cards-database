import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "スキッティ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [300],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "重要な用事",
                                                                      },
          effect: {
                        ja: "デッキを検索してReact Energyカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ジャンプします",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
