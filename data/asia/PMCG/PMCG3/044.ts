import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギー転送",
	},

	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575664
			},
		},
	],
};

export default card
