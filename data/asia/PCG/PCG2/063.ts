import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シェルゴン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [372],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "難しい保護",
			},
			effect: {
				'ja-jp': "ポカンからの攻撃によってシェルゴンに与えられたすべての損害を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Water"],
			name: {
				'ja-jp': "ロックスマッシュ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。",
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
