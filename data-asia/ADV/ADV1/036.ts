import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "Chansey Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 120,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "卵の癒し",
                                                                      },
          effect: {
                        ja: "各ポケモンから2つのダメージカウンター（1つの場合は1つの場合は1）を削除します。 Chansey Exからダメージカウンターを削除しません。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ダブルエッジ",
                                                                      },
          effect: {
                        ja: "Chansey Exはそれ自体に60のダメージを与えます。",
                                                                      },
          damage: 80,
        },
      ],

      retreat: 3,

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
