import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "マネクリック",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [310],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "蹴ってください",
                                                                      },
          effect: {
                        ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
                        ja: "強い電流",
                                                                      },
          effect: {
                        ja: "Manectricにポケモンツールカードが付属している場合、この攻撃は、対戦相手のベンチで20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
