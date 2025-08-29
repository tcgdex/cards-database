import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ガストリー",
	},

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
				ja: "なめる",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "エネルギー変換",
			},
			effect: {
				ja: "捨てられた山から最大2枚のエネルギーカードを手に入れます。 Gastlyはそれ自体に10ダメージを与えます。",
			},

		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
