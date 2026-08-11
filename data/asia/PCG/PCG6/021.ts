import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サラメンス（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [373],
	hp: 110,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "ファイアダンス",
			},
			effect: {
				'ja-jp': "廃棄の山を検索して、ファイアエネルギーカードを使用して、1枚のポケモンに取り付けます。",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "デルタブラスト",
			},
			effect: {
				'ja-jp': "サラメンスに取り付けられた金属エネルギーカードを捨てます。",
			},
			damage: 100,
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
