import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タマムシシティジム",
	},
	illustrator: "Kenji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576771
			},
		},
	],
};

export default card
