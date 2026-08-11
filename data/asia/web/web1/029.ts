import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Dugtrio",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [51],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "地下に行きます",
			},
			effect: {
				'ja-jp': "このポケモンがあなたのベンチにある限り、攻撃<em>（あなたと相手の両方）でこのポケモンに与えられたすべての損害を防ぎます</em>。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				'ja-jp': "地球の波",
			},
			effect: {
				'ja-jp': "この攻撃は、対戦相手のベンチポケモンの2つに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
