import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		// Goldeen
		ja: "トサキント",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ホーン攻撃",
			},
			damage: 10,
		},
	],


	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576621
			},
		},
	],
};

export default card
