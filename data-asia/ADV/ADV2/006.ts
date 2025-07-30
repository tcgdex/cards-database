import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "カクネア",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [331],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ポイズンの見返り",
                                                                      },
          effect: {
                        ja: "カクネアがあなたの活動的なポケモンであり、相手の攻撃によって損傷を受けている場合（カクネアがノックアウトされたとしても）、攻撃するポカモンは現在毒されます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "軽いパンチ",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
