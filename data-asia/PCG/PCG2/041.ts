import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Dusclops",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [356],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
                        ja: "サイキック除去",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。両方がヘッドである場合、防御ポケモンに取り付けられたすべてのエネルギーを捨ててください。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "強力な手",
                                                                      },
          effect: {
                        ja: "あなたの手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。この方法で7つ以上のダメージカウンターを配置することはできません。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
