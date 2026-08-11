import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ho-oh",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "ストーク",
			},
			effect: {
				'ja-jp': "デッキを検索して消防剤カードを検索し、Ho-Ohに添付することができます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "神聖な火",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
