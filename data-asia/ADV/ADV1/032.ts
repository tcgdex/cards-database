import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ドンファン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [232],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "レンド",
                                                                      },
          effect: {
                        ja: "防衛ポケモンにダメージカウンターがある場合、この攻撃は20のダメージと20のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ダブルスピン",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の60回のダメージ倍になります。",
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
			stamp: ["1st edition"]
		},
	],
};
