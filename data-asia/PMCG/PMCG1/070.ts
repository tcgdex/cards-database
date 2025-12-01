import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギー除去",
	},

	rarity: "Common",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/92.ts"
		}
	]
};

export default card
