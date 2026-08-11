import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラウドボーンex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "かつりょくのうた"
		},

		damage: 50,

		effect: {
			'ja-jp': "自分のポケモン全員のHPを、それぞれ「30」回復する。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "バーニングボイス"
		},

		damage: "270－",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"
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
				cardmarket: 701547,
				tcgplayer: 568210,
			},
		},
	],

	retreat: 3
}

export default card