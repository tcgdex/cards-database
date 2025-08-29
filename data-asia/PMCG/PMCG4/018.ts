import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "squirtle",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [7],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "シェル攻撃",
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
