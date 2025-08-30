import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "バルトイ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [343],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "急速なスピン",
                                                                      },
          effect: {
                        ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。ベンチ付きポケモンの1つでバルトイを切り替えます。",
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
      ],
};

export default card
