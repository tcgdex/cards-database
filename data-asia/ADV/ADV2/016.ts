import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "マリル",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [183],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "二重バブル",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。いずれかのコインがヘッドである場合、防御ポケモンは麻痺しています。",
                                                                      },
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
