import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴鯉龍"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "性情非常凶暴。從嘴裡發出的破壞光線能夠將一切燃燒殆盡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂暴"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，將對手的牌庫上方與正面出現的次數×2張相同數量的卡丟棄。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "瘋狂飛濺"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡丟棄。"
		},

		damage: 230,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card