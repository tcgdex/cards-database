import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "最大電圧",
			},
			effect: {
				'ja-jp': "ピカチュウに取り付けられたすべての稲妻エネルギーカードを捨てます。この攻撃は、この方法で破棄されたエネルギーカードごとに20のダメージに加えて10ダメージを与えます。",
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
