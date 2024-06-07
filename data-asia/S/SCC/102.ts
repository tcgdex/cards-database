import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搗蛋小妖"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "不但會溜進民宅偷盜，還會吸收人們悔恨時的負面能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "嬉鬧"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "10+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card