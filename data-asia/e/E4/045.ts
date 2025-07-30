import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "スターミー",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            ja: "エネルギーバースト",
          },
          effect: {
            ja: "コインをひっくり返します。ヘッドの場合、この攻撃は、スターミーと防御ポケモンに取り付けられたエネルギーの数を10回ダメージします。",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            ja: "スターバック",
          },
          effect: {
            ja: "廃棄パイルからポケモン1に基本的なエネルギーカードを取り付けます。",
          },
          damage: 40,
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
