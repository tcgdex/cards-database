import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "きずぐすり配合エネルギー",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575733
			},
		},
	],
};

export default card
