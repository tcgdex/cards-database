import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "爪の化石",
	},

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
