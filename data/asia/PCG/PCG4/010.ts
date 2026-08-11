import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤンマ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [193],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "グランドループ",
			},
			effect: {
				'ja-jp': "2枚のカードを描きます。 Yanmaをベンチ付きポケモン1枚で切り替えることができます。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "尾を回します",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
