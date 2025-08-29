import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "Zubat",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "毒スプレー",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
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
