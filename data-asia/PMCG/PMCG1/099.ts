import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "水エネルギー",
	},

	rarity: "Common",
	category: "Energy",

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/102.ts"
		}
	]
};

export default card
