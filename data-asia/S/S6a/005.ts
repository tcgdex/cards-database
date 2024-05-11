import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶包繭"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "用葉子包裹身體來抵禦寒冷。一邊吃著身旁的落葉，一邊在森林裡移動。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "打滾"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "10+",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card