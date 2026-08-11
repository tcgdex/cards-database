import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "奇跡のエネルギー",
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
