import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [372],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "シェルゴンのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ローリングタックル",
			},
			damage: 40,
		},
	],

	retreat: 2,

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
