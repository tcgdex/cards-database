import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ガストリー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "悪夢",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
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
