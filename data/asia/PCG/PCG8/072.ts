import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "停止クリスタル",
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
