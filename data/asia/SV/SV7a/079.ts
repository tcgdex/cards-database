import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フライゴンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "ストームバック"
		},

		damage: 130,

		effect: {
			'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Water", "Fighting", "Metal"],

		name: {
			'ja-jp': "ペリドットソニック"
		},

		effect: {
			'ja-jp': "相手の「ポケモンex・V」全員に、それぞれ100ダメージ。このワザのダメージは弱点・抵抗力を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788052,
				tcgplayer: 579461,
			},
		},
	],

	retreat: 1,
	rarity: "None",
}

export default card