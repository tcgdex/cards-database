import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "マルヤクデ"
	},

	illustrator: "Aliya Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "もえるねっぱ"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートブラスト"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card