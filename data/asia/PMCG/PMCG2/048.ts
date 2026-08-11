import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モンスターボール",
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576640
			},
		},
	],
};

export default card
