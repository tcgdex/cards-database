import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベリー",
	},

	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
