import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/96.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "二重の無色のエネルギー",
	},

	rarity: "Uncommon",
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
