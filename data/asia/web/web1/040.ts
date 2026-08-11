import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケットのスニーク攻撃",
	},

	rarity: "Rare",
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
