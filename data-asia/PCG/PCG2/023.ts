import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Magikarp",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "飛び出します",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つでMagikarpを切り替えます。",
			},
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "Magikarpのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
