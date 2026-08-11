import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "比克提尼"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "如果分享到比克提尼產出的無限能量，全身就會充滿力量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "快速抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "烈焰"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
