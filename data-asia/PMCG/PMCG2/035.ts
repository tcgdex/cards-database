import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "jigglypuff",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "子守lulaby",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ポンド",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
