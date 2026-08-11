import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "なんでもなおし配合エネルギー",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575722
			},
		},
	],
};

export default card
