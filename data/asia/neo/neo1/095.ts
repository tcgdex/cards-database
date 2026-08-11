import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "金属エネルギー",
	},

	rarity: "Holo Rare",
	category: "Energy",

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
