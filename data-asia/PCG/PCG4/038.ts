import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Elekid",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [239],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "赤ちゃんの進化",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）ターン中に、ElectabuzzをElekid（これは進化するElekidとしてカウント）にElectabuzzを置き、Elekidからすべてのダメージカウンターを削除できます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "磁気旅行",
                                                                      },
          effect: {
                        ja: "低圧システムが機能している場合、防御ポケモンは混乱しています。",
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
