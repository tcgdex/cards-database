import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "ベルダム（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [374],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "導電性ボディ",
                                                                      },
          effect: {
                        ja: "ベルダムがあなたのアクティブなポケモンである限り、あなたはあなたのベンチの各ベルダムのベルダムを後退させるために無色の少ない支払いをします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "降ろす",
                                                                      },
          effect: {
                        ja: "Beldumはそれ自体に10ダメージを与えます。",
                                                                      },
          damage: 30,
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
