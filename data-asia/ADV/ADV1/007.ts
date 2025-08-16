import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "気まぐれ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [268],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ハードココン",
                                                                      },
          effect: {
                        ja: "対戦相手のターン中に、逆流攻撃によって（脱力感と抵抗を適用した後）、カスクーンが攻撃によって損傷を受ける場合、コインをひっくり返します。頭の場合は、そのダメージを30に減らします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "毒スレッド",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。",
                                                                      },
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
