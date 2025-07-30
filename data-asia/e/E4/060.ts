import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ラッタタ",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [19],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "友達を呼びます",
          },
          effect: {
            ja: "ベビーポケモンまたは基本的なポケモンカードを求めてデッキを検索し、ベンチに置きます。その後、デッキをシャッフルします。 （この攻撃を使用することはできませんそれはあなたのベンチがいっぱいです。）",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            ja: "ボディスラム",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
          },
          damage: 10,
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
