import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "仮面舞踏会",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [284],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "威圧的なパターン",
                                                                      },
          effect: {
                        ja: "マスカレインがあなたのアクティブなポケモンである限り、相手の攻撃によって与えられた損害は20増加します（脱力感と抵抗を適用する前）。 1ターンを1ターン以上ボディを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "スタン胞子",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 20,
        },
      ],


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
