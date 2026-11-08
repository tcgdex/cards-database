import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "抵抗力低下ジム",
	},
	illustrator: "Kenji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576838
			},
		},
	],
};

export default card
