import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴース",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [92],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "なめる",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "エネルギー変換",
			},
			effect: {
				'ja-jp': "捨てられた山から最大2枚のエネルギーカードを手に入れます。 Gastlyはそれ自体に10ダメージを与えます。",
			},

		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575697
			},
		},
	],
};

export default card
