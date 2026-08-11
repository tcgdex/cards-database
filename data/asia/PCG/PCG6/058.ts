import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マロワク（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [105],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Metal"],
			name: {
				'ja-jp': "エネルギー骨",
			},
			effect: {
				'ja-jp': "Marowakに取り付けられたエネルギーの量まで、相手のポケモンをいくつか選択してください。この攻撃は、それぞれに20のダメージを与えます。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メタルクラッシャー",
			},
			effect: {
				'ja-jp': "防御ポケモンが金属ポケモンの場合、この攻撃の基本ダメージは90です。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
