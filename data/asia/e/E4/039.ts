import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライコウ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [243],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "純粋な体",
			},
			effect: {
				'ja-jp': "手からライコウに稲妻エネルギーカードを取り付けるには、ライコウに取り付けられたエネルギーカードを捨てる必要があります。 （稲妻エネルギーを取り付けてから、ライコウからエネルギーカードを捨てます。）",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				'ja-jp': "稲妻球",
			},
			effect: {
				'ja-jp': "コインをひっくり返すことができます。頭の場合は、ライコウに取り付けられたすべての稲妻エネルギーカードを捨ててください。この攻撃は、この方法で破棄されたエネルギーカードごとに40のダメージと20のダメージを与えます。",
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
