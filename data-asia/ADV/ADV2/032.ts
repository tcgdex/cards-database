import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "wynaut",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [360],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "赤ちゃんの進化",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、Wobbuffetを手からWynaut（これは進化するWynautとしてカウント）に置き、Wynautからすべてのダメージカウンターを削除することができます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
                        ja: "魅力的な笑顔",
                                                                      },
          effect: {
                        ja: "Wynautに取り付けられた各エネルギーの基本的なポケモンカードまたはEvolution Cardをデッキに検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。",
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
			stamp: ["1st edition"],
		},
	],
};
