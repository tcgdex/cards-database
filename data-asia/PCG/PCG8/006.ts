import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "グロビル",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [253],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "検出する",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、対戦相手の次のターン中にグロビルに行われたダメージを含む攻撃のすべての影響を防ぎます。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "スマッシュキック",
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
