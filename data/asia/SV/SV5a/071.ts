import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フィオネ"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	dexId: [489],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "海の 温度が 高くなると 頭の 浮き袋を ふくらませて 海面を 集団で 漂う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "まねきよせる"
		},

		effect: {
			'ja-jp': "自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Water"],

		name: {
			'ja-jp': "エナジープレス"
		},

		damage: "20×",

		effect: {
			'ja-jp': "相手のバトルポケモンについているエネルギーの数×20ダメージ。"
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
				cardmarket: 761531,
				tcgplayer: 566126,
			},
		},
	],

	retreat: 1,
}

export default card