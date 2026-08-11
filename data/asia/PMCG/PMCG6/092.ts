import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団の爆発ジム",
	},
	illustrator: "Keiji Kinebuchi",

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575383
			},
		},
	],
};

export default card
