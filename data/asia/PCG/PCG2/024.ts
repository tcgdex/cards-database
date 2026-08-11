import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギャラドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "ドラゴンスパーク",
			},
			effect: {
				'ja-jp': "この攻撃は、相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "完全な報復",
			},
			effect: {
				'ja-jp': "20のダメージ数は、Magikarpのすべてのダメージ数をカウンターします。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "粉砕します",
			},
			effect: {
				'ja-jp': "ディフェンディングポケモンがすでに少なくとも2つのダメージカウンターを既に持っている場合、この攻撃は50のダメージと50のダメージを与えます。",
			},
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
