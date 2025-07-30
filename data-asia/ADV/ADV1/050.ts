import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "レイロン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [305],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal"],
          name: {
                        ja: "大きさ",
                                                                      },
          effect: {
                        ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ワンツーストライク",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。",
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
