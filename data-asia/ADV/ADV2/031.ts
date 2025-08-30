import {Card} from "../../../interfaces"
import Set from "../ADV2"

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
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "判定",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。両方がヘッドである場合、防御ポケモンはノックアウトされます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "ランダムな呪い",
                                                                      },
          effect: {
                        ja: "あなたが好きな方法で、すべての防御ポケモンに合計5つのダメージカウンターを入れてください。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
