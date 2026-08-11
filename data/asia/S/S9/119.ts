import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エルフーンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "トリックウインド"
		},

		damage: 160,

		effect: {
			'ja-jp': "次の相手の番、相手は手札から、「ポケモンのどうぐ」「特殊エネルギー」を出してつけられない。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			'ja-jp': "わただまスター"
		},

		effect: {
			'ja-jp': "相手のポケモン1匹に、このポケモンについているエネルギーの数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606284,
				tcgplayer: 569747,
			},
		},
	],

	retreat: 1,
}

export default card