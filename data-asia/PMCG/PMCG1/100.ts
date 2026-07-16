import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "基本雷エネルギー",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 577169
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
		}
	],
};

export default card
