import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "美しい",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [267],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "枯れのほこり",
                                                                      },
          effect: {
                        ja: "Beautiflyが機能している限り、すべてのアクティブなPokã©Monに抵抗を適用しないでください。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "スタン胞子",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "並列ゲイン",
                                                                      },
          effect: {
                        ja: "Beautiflyを含む各ポケモンから1つのダメージカウンターを取り外します。",
                                                                      },
          damage: 50,
        },
      ],

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
	],
};
