import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "バゴン",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
                        ja: "シング",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
                                                                      },
        },
        {
          cost: ["Water"],
          name: {
                        ja: "doubleslap",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
