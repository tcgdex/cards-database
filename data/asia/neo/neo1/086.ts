import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ecogym",
	},

	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
