import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "フィオネ"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	dexId: [489],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "海の 温度が 高くなると 頭の 浮き袋を ふくらませて 海面を 集団で 漂う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まねきよせる"
		},

		effect: {
			ja: "自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "エナジープレス"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 761482
	}
}

export default card