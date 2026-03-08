import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "カルバンハ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [318],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "シャープフィン",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "Carvanhaの各ダメージカウンターの10ダメージと10ダメージをさらに10回します。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
