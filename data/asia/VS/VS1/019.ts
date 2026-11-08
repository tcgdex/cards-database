import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホイットニーのミルタンク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [241],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "防衛カール",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、相手の次のターン中に攻撃によってホイットニーのミルタンクに与えられたすべてのダメージを防ぎます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
