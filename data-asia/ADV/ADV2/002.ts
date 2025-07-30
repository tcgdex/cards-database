import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ヌズリーフ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [274],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "安定したパンチ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "かみそりの葉",
                                                                      },
          damage: 40,
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
