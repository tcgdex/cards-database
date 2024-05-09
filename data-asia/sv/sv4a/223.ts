import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "ツノから 水を 吹きだし 泳ぐ。 脂肪分が 多く 浮きやすいのが ウォーター種の 特徴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかりのつの"
		},

		damage: "20＋",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ウォーターダイブ"
		},

		effect: {
			ja: "相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card