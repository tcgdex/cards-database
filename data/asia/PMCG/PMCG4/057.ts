import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "夜の廃品回収",
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575774
			},
		},
	],
};

export default card
