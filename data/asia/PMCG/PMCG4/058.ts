import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "たたきつけろ!挑戦状",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575758
			},
		},
	],
};

export default card
