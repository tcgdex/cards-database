import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "マイティエナ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "恐ろしい牙",
                                                                      },
          effect: {
                        ja: "MightyenaがあなたのアクティブなPokã©Monである限り、相手の攻撃によってPokã©Monに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
                        ja: "シェイクダウン",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、見ても捨てずに相手の手から1枚のカードを選択してください。",
                                                                      },
          damage: 40,
        },
      ],

      retreat: 1,

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
