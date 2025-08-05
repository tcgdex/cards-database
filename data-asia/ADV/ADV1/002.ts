import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "おしっこ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [110],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "混乱ガス",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今混乱しています。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "毒スモッグ",
                                                                      },
          effect: {
                        ja: "それぞれの防御ポケモンは現在中毒になっています。対戦相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
      ],

      retreat: 2,

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
