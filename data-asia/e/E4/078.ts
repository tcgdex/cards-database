import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "砂漠のシャーマン",
	},

	rarity: "Uncommon",
	category: "Trainer",

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
