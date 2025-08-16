import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "カルバンハ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [318],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "粗い肌",
                                                                      },
          effect: {
                        ja: "Carvanhaがあなたのアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（カルバンハがノックアウトされたとしても）、攻撃のポカンに1つのダメージカウンターを置きます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "大きな一口",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
                                                                      },
          damage: 10,
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
