import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ケクレオン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [352],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "エネルギーの変動",
                                                                      },
          effect: {
                        ja: "Kecleonのタイプは、Kecleonに取り付けられたあらゆる種類の基本エネルギーカードと同じです。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "二重スクラッチ",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
