import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プラスレ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [311],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "家族を呼びます",
			},
			effect: {
				'ja-jp': "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "ポジティブな火花",
			},
			effect: {
				'ja-jp': "ポケパウアーを持つ相手の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
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
