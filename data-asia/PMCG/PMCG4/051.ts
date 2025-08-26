import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラチーニ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "包む",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
