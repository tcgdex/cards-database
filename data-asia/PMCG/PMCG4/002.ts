import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		// Zubat
		ja: "ズバット",
	},

	illustrator: "Mitsuhiro Arita",
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
				ja: "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575740
			},
		},
	],
};

export default card
