import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "セビパー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [336],
      hp: 80,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "猛毒",
                                                                      },
          effect: {
                        ja: "Seviperに取り付けられた草のエネルギーカードを捨てることができます。もしそうなら、防御するポケモンは今や毒されています。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "余分な毒",
                                                                      },
          effect: {
                        ja: "防御ポケモンがポケモンエクスである場合、防御するポケモンは眠って毒されています。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
