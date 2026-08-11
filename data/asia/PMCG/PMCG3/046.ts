import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "なにかの化石",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575671
			},
		},
	],
};

export default card
