import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Growlithe -014/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ro音",
			},
			effect: {
				'ja-jp': "対戦相手がベンチでポケモンを持っている場合、彼または彼女はそれらの1つを選択し、防御するポケモンをそれで切り替えます。",
			},
		},
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "火の猛烈な",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
			},
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
