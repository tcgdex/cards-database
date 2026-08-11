import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'zh-tw': "性情極具攻擊性。危險的不只是牠燒燙的身體，大大的獠牙也銳利無比。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "盤蜷"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+90」點。"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "燃燒列車"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card