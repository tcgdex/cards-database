import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーサーキュレート",
	},
	illustrator: "Kenji Kinebuchi",
	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576775
			},
		},
	],
};

export default card
