import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "スターミー",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "コアガード",
                                                                      },
          effect: {
                        ja: "スターミーに精神的なエネルギーが付着している限り、攻撃によってスターミーに与えられた損傷は10増加します（衰弱と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "エネルギーフリップ",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）そのポケモンに取り付けられたエネルギーを、相手のポケモンの別のポケモンに移動できます。",
                                                                      },
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "サイキックブーム",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
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
