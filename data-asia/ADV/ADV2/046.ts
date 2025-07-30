import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Aggron Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 150,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "レンド",
                                                                      },
          effect: {
                        ja: "防衛ポケモンにダメージカウンターがある場合、この攻撃は30のダメージと30のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "金属サージ",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンのそれぞれに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
