import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "せまいジム",
	},
	illustrator: "Kenji Kinebuchi",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576834
			},
		},
	],
};

export default card
