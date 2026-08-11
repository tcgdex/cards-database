import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アズマリル-025/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [184],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "バブルターン",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）</em> </em>、アズマリルがベンチにいる場合、コインをひっくり返すことができます。頭の場合は、Azumarillとそれに取り付けられたすべてのカードをあなたの手に返します。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "アクアソニック",
			},
			effect: {
				'ja-jp': "抵抗を適用しないでください。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
