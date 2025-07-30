import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ロンベル",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [271],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "雨皿",
                                                                      },
          effect: {
                        ja: "ターンの間にいつでも、Lombreから1つのダメージカウンターを取り外します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "二重スクラッチ",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
