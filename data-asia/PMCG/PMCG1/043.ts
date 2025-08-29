import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "アブラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [63],
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
