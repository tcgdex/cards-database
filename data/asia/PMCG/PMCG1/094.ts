import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモン育て屋さん",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575629
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577056
			},
		},
	],
};

export default card
