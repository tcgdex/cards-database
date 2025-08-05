import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "アルマルド",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [348],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "原始ベール",
                                                                      },
          effect: {
                        ja: "ArmaldoがアクティブなPokã©Monである限り、各プレイヤーはサポーターカードをプレイできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
                        ja: "ブレードアーム",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
