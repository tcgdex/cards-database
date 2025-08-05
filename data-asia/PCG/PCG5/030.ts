import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "clamperl",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [366],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "鉄の防御",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にClamperlに行われたダメージを含む攻撃のすべての影響を防ぎます。",
                                                                      },
        },
        {
          cost: ["Water"],
          name: {
                        ja: "クランプスプラッシュ",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
