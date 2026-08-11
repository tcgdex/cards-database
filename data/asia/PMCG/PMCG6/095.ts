import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サカキ",
	},
	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575333
			},
		},
	],
};

export default card
