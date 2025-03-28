import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "マルヤクデ",
		'zh-tw': "焚焰蚣",
		'zh-cn': "焚焰蚣"
	},

	illustrator: "Aliya Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。",
		'zh-tw': "發熱時的體溫大約有８００度。 會像鞭子那樣彎曲身體， 朝著敵人彈跳過去。",
		'zh-cn': "發熱時的體溫大約有８００度。 會像鞭子那樣彎曲身體， 朝著敵人彈跳過去。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "もえるねっぱ",
			'zh-tw': "燃燒熱浪",
			'zh-cn': "燃燒熱浪"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破",
			'zh-cn': "高溫爆破"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card