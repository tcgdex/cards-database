import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルバサウルス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [1],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "リーチシード",
			},
			effect: {
				ja: "このポケモンから10ダメージを癒します。",
			},
			damage: 20,
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
