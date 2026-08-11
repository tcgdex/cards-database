import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウェーニバルex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "エキサイトサンバ"
		},

		damage: 60,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "スクリューシュート"
		},

		damage: 230,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701548,
				tcgplayer: 568211,
			},
		},
	],

	retreat: 2
}

export default card