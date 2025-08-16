import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "シャルデド",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [319],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "粗い肌",
                                                                      },
          effect: {
                        ja: "SharpedoがアクティブなPokã©Monであり、対戦相手の攻撃によって損傷を受けている場合（Sharpedoがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを入れます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "暗いスラッシュ",
                                                                      },
          effect: {
                        ja: "Sharpedoに取り付けられたDarkness Energyカードを捨てることができます。そうした場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
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
