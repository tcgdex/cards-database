import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スマッシュキック",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "炎の尾",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/60.ts"
		}
	]
};

export default card
