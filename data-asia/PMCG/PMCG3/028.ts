import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		// Slowbro
		ja: "ヤドラン",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [80],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575709
			},
		},
	],
};

export default card
