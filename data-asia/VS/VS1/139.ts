import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーアーク",
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
