import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キョウ秘伝, 変わり身の術",
	},
	illustrator: "Sumiyoshi Kizuki",

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575379
			},
		},
	],
};

export default card
