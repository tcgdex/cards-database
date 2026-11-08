import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フレレオン（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタ検索",
			},
			effect: {
				'ja-jp': "デッキを検索してホロンエネルギーカードを調べ、フレアロンに添付してください。その後、デッキをシャッフルします。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Metal", "Colorless"],
			name: {
				'ja-jp': "火傷を返します",
			},
			effect: {
				'ja-jp': "フレアロンに取り付けられたエネルギーカードを手に返すことができます。もしそうなら、防御するポケモンは燃やされます。",
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
