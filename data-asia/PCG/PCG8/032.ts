import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "カリザード（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [6],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "雷の皮",
                                                                      },
          effect: {
                        ja: "ターン中に、手からチャリザードをプレイしてポカンの1つを進化させると、デッキのトップ5カードを見て、好きなだけエネルギーカードを選択し、ポケモンの1つに取り付けます。他のカードを破棄します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal", "Metal", "Colorless"],
          name: {
                        ja: "金属燃焼",
                                                                      },
          effect: {
                        ja: "Charizardに取り付けられたすべての金属エネルギーを捨てます。",
                                                                      },
          damage: 120,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
