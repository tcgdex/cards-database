import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "キルリア",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [281],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "まばゆいばかりのダンス",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御するポケモンはそれぞれ混乱しています。",
                                                                      },
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "生命排水",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、ダメージを塗るポケモンにダメージカウンターを入れて、ノックアウトから10 hp離れています。",
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
