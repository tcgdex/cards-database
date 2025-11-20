import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/47.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "ディグレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "掘る",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			card: InternationCard
		}
	]
};

export default card
