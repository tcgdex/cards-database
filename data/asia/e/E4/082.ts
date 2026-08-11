import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターピース",
	},

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
