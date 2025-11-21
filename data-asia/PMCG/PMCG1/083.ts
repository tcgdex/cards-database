import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/85.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンセンター",
	},

	rarity: "Uncommon",
	category: "Trainer",

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
