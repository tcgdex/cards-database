import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "houndour（u）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [228],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "略奪",
			},
			effect: {
				ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨てます（ダメージに影響する前）。",
			},
			damage: 20,
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
