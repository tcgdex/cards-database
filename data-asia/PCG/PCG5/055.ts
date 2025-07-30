import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "トラピンチ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [328],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ペブルスロー",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ダブルピンチャー",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
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
