import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "スターミー（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "金属ナビゲーション",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前）になったら、デッキを金属エネルギーカードで検索し、スターミーに取り付けることができます。その後、デッキをシャッフルします。 Starmieが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "集める",
                                                                      },
          effect: {
                        ja: "3枚のカードを描きます。",
                                                                      },
        },
        {
          cost: ["Metal"],
          name: {
                        ja: "エネルギーループ",
                                                                      },
          effect: {
                        ja: "スターミーに取り付けられたエネルギーカードをあなたの手に返します。",
                                                                      },
          damage: 30,
        },
      ],


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
