import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "基本炎エネルギー",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577171
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
		}
	],
};

export default card
