import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "デューゴン（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デルタ保護",
                                                                      },
          effect: {
                        ja: "カードにある相手のPokã©Monからの攻撃によってDewgongに与えられた損害は、40倍に削減されます（脱力感と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "アイスビーム",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "うねり",
                                                                      },
          effect: {
                        ja: "Dewgongに少なくとも2つの水エネルギーが付着している場合、この攻撃は40のダメージと20のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 2,

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
