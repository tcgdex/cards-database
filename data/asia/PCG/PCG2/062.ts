import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [371],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "シング",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
			},
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "doubleslap",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
