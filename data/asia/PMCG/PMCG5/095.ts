import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団の特訓ジム",
	},
	illustrator: "Kenji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
