import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネルギーをリサイクルします",
	},

	rarity: "Rare",
	category: "Energy",

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
