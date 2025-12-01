import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "超エネルギー除去",
	},

	rarity: "Rare",
	category: "Trainer",

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/79.ts"
		}
	]
};

export default card
