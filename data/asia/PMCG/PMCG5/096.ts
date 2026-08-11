import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のワナ",
	},
	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Trainer",

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
