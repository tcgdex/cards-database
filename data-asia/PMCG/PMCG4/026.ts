import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "磁気",
			},
			effect: {
				ja: "ベンチにある各マグネミテ、マグネトン、ダークマグネトンに10ダメージを加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
