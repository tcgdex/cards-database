import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "リノーネ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [264],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "探してください",
                                                                      },
          effect: {
                        ja: "デッキを最大2枚のカードを検索し、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "連続ヘッドバット",
                                                                      },
          effect: {
                        ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
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
