import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角犀牛"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "頭腦很差但力氣很大，只要撞擊就能把 高樓大廈撞得粉粹。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "猛撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card