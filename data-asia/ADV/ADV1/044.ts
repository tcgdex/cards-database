import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "スキッティ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [300],
      hp: 40,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "マイナーな用事が走る",
                                                                      },
          effect: {
                        ja: "デッキを2枚の基本的なエネルギーカードで検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless"],
          name: {
                        ja: "子守lulaby",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今眠っています。",
                                                                      },
          damage: 10,
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
