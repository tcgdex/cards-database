import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "新しいpokedex",
	},

	rarity: "Common",
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
