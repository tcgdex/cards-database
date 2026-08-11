import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のおねーさん",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575756
			},
		},
	],
};

export default card
