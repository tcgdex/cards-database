import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オーキドはかせ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575657
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577084
			},
		},
	],
};

export default card
