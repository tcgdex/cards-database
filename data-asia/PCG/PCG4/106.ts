import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ワープエネルギー",
	},

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
