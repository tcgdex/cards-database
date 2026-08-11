import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レイカザの星",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [384.1],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Lightning"],
			name: {
				'ja-jp': "スパイラルラッシュ",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
		{
			cost: ["Fire", "Fire", "Lightning", "Lightning"],
			name: {
				'ja-jp': "聖なる星",
			},
			effect: {
				'ja-jp': "Rayquazaに取り付けられたすべてのエネルギーカードを捨てます{{Star | This Pokemon}}。この攻撃は、対戦相手の各ポケモンエクスに100のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
