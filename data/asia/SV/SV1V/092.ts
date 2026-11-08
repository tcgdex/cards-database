import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウインディex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "いかりのツメ"
		},

		damage: "30＋",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'ja-jp': "ぐれんのほのお"
		},

		damage: 250,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693167,
				tcgplayer: 568318,
			},
		},
	],

	retreat: 3,
}

export default card