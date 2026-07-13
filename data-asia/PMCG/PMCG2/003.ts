import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		// Paras
		ja: "パラス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [46],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "胞子",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576634
			},
		},
	],
};

export default card
