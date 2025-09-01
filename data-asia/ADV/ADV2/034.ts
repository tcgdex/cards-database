import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "サンドスラッシュ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [28],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "砂の渦巻き",
                                                                      },
          effect: {
                        ja: "防御する各ポケモンに20のダメージを与えます。ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "地震",
                                                                      },
          effect: {
                        ja: "ベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 60,
        },
      ],

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

export default card
