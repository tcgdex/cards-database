import { Card } from "../../../interfaces"
import Set from "../SVEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波爾凱尼恩"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "從背上的手臂噴出體內的水蒸氣。 有著將整座山轟飛的威力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二重渦輪"
		},

		effect: {
			'zh-tw': "選擇最多2隻自己的備戰寶可夢，從棄牌區附給那些寶可夢各1張「基本【火】能量」卡。"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "重磅衝擊"
		},

		damage: 120,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card