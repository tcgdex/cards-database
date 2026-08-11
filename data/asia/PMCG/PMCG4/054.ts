import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ねむれ!ねむれ!",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575736
			},
		},
	],
};

export default card
