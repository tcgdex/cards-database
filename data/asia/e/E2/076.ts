import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スーパーエネルギー除去2",
	},

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
