import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "シルクーン",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [266],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ハードココン",
                                                                      },
          effect: {
                        ja: "相手のターン中、シルクーンが対戦相手の攻撃によって（脱力感と抵抗を適用した後）損傷を受けた場合、コインをひっくり返します。頭の場合は、そのダメージを30に減らします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "グーイのスレッド",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 2,

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
