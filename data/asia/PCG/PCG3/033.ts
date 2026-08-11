import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マッドキップスター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [258],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "渦",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
		},
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "バックバック",
			},
			effect: {
				'ja-jp': "対戦相手が1枚の賞カードしか残っていない場合、この攻撃は20ダメージに加えて50ダメージを与え、ディフェンディングポケモンが眠っています。",
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
