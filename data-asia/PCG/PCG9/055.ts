import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ニドギング（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [34],
      hp: 120,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "線形攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
                        ja: "暗い角",
                                                                      },
          effect: {
                        ja: "基本的なポケモンまたはエボリューションカードを手から捨てることができます。もしそうなら、相手のベンチポケモンの1つを選択し、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 3,

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
