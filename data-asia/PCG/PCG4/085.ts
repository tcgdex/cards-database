import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Porygon2",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [233],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "3Dリセット",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）好きなように、Pokã©Monに取り付けられたPokã©Mon Tool Cardを手に返します。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "データ取得",
                                                                      },
          effect: {
                        ja: "手に8枚未満のカードがある場合は、手に8枚のカードがあるまでカードを描画します。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "スクランブル旅行",
                                                                      },
          effect: {
                        ja: "Porygon2にスクランブルエネルギーカードが取り付けられている場合、この攻撃は40ダメージに20回のダメージを与え、防御ポケモンが混乱しています。",
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
