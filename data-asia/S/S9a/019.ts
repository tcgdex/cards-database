import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛豬",
		ja: "イノムー"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "朝著對手衝過去時，背上的體毛會倒豎起來。 對聲音極度敏感。",
		ja: "相手 めがけて 突進するとき 背中の 体毛が 逆立つ。 音に ものすごく 敏感。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踩",
			ja: "ふむ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暴風雪",
			ja: "ふぶき"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [221]
}

export default card