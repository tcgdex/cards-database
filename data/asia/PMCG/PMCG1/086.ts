import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "退化スプレー",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575620
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577047
			},
		},
	],
};

export default card
