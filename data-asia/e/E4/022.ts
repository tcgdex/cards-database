import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "PoliWhirl",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "ツイドル",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは今眠っています。",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            ja: "ダブルキック",
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
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
