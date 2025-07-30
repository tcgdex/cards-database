import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "ガルピン",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [316],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "健忘症",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "スラッジトス",
                                                                      },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
