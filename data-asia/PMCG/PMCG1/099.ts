import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/102.ts";

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
			card: InternationCard
		}
	]
};

export default card
