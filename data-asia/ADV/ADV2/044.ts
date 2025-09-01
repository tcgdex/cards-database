import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "sableye",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "超自然",
                                                                      },
          effect: {
                        ja: "相手の手を見てください。この攻撃の効果として、そこにあるサポーターカードの効果を使用できます。 （サポーターカードは相手の手に残ります。）",
                                                                      },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
                        ja: "暗いバインド",
                                                                      },
          effect: {
                        ja: "Sableyeに取り付けられたDarkness Energyカードを捨てることができます。もしそうなら、防御するポケモンは今や麻痺しています。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
