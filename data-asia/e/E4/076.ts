import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "スカルモリー",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [227],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "ダブルペック",
          },
          effect: {
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            ja: "スピニングヘッド",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンを1枚スカルモリーします。",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
