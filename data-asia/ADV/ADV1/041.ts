import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "スラコス",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [287],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "爪",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "スラックオフ",
                                                                      },
          effect: {
                        ja: "Slakothからすべてのダメージカウンターを削除します。スラコスは次のターン中に攻撃できません。",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
