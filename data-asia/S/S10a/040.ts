import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "艾路雷朵V"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "璀璨之劍"
		},

		effect: {
			'zh-tw': "增加自己已經獲得的獎賞卡的張數×50點傷害。"
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "粗暴橫掃"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card